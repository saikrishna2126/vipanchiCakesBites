from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import items

app = FastAPI(title="Vipanchi Bakery API", version="0.1.0")

# Enable CORS for local frontend dev (Angular default port 4200)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "http://127.0.0.1:4200", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router provides /orders and /expenses endpoints
app.include_router(items.router)


@app.get("/", summary="Root endpoint")
async def root():
    """Simple root endpoint to verify the service is running."""
    return {"message": "Welcome to Vipanchi Bakery API"}
