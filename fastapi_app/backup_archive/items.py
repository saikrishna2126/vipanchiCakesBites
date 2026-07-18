from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import Optional, List
from uuid import uuid4
from datetime import datetime

router = APIRouter()


class TransactionBase(BaseModel):
    item: str
    amount: float = Field(..., gt=0, description="Amount in currency units; must be > 0")
    description: Optional[str] = None
    timestamp: Optional[datetime] = None


class Order(TransactionBase):
    id: str


class Expense(TransactionBase):
    id: str


# In-memory stores for demo purposes
_orders_db: dict[str, Order] = {}
_expenses_db: dict[str, Expense] = {}


@router.post("/orders/", response_model=Order, status_code=201)
async def create_order(order: TransactionBase):
    """Create a new order (cash inflow). Returns the created order with an `id`."""
    id = str(uuid4())
    ts = order.timestamp or datetime.utcnow()
    o = Order(id=id,item= order.item, amount=order.amount, description=order.description, timestamp=ts)
    _orders_db[id] = o
    return o


@router.get("/orders/", response_model=List[Order])
async def list_orders():
    """Return all orders (cash inflows)."""
    return list(_orders_db.values())


@router.get("/orders/{id}", response_model=Order)
async def get_order(id: str):
    """Get a single order by id."""
    o = _orders_db.get(id)
    if not o:
        raise HTTPException(status_code=404, detail="Order not found")
    return o


@router.post("/expenses/", response_model=Expense, status_code=201)
async def create_expense(expense: TransactionBase):
    """Create a new expense (cash outflow). Returns the created expense with an `id`."""
    id = str(uuid4())
    ts = expense.timestamp or datetime.utcnow()
    e = Expense(id=id, item=expense.item, amount=expense.amount, description=expense.description, timestamp=ts)
    _expenses_db[id] = e
    return e


@router.get("/expenses/", response_model=List[Expense])
async def list_expenses():
    """Return all expenses (cash outflows)."""
    return list(_expenses_db.values())


@router.get("/expenses/{id}", response_model=Expense)
async def get_expense(id: str):
    """Get a single expense by id."""
    e = _expenses_db.get(id)
    if not e:
        raise HTTPException(status_code=404, detail="Expense not found")
    return e


@router.delete("/orders/{id}", status_code=204)
async def delete_order(id: str):
    """Delete an order by id."""
    if id in _orders_db:
        del _orders_db[id]
        return
    raise HTTPException(status_code=404, detail="Order not found")


@router.delete("/expenses/{id}", status_code=204)
async def delete_expense(id: str):
    """Delete an expense by id."""
    if id in _expenses_db:
        del _expenses_db[id]
        return
    raise HTTPException(status_code=404, detail="Expense not found")
