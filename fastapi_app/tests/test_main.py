import pytest
from httpx import AsyncClient

from app.main import app


@pytest.mark.asyncio
async def test_root():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        r = await ac.get("/")
    assert r.status_code == 200
    assert r.json() == {"message": "Welcome to Vipanchi Bakery API"}


@pytest.mark.asyncio
async def test_create_and_get_item():
    # create an order (cash inflow)
    order = {"amount": 12.5, "description": "Large bakery order"}
    async with AsyncClient(app=app, base_url="http://test") as ac:
        r = await ac.post("/orders/", json=order)
        assert r.status_code == 201
        data = r.json()
        assert "id" in data
        assert data["amount"] == order["amount"]

        oid = data["id"]
        r2 = await ac.get(f"/orders/{oid}")
        assert r2.status_code == 200
        assert r2.json()["amount"] == order["amount"]

        rlist = await ac.get("/orders/")
        assert rlist.status_code == 200
        assert any(i["id"] == oid for i in rlist.json())

        # create an expense (cash outflow)
        expense = {"amount": 3.0, "description": "Ingredient purchase"}
        r3 = await ac.post("/expenses/", json=expense)
        assert r3.status_code == 201
        ed = r3.json()
        assert ed["amount"] == expense["amount"]

        eid = ed["id"]
        r4 = await ac.get(f"/expenses/{eid}")
        assert r4.status_code == 200
        assert r4.json()["amount"] == expense["amount"]

        rlist_exp = await ac.get("/expenses/")
        assert rlist_exp.status_code == 200
        assert any(e["id"] == eid for e in rlist_exp.json())
