from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
try:
    from .routers import enquiry
except (ImportError, ValueError):
    from routers import enquiry

app = FastAPI(title="Vipanchi Bakery API", version="0.1.0", redirect_slashes=False)

import os

# Enable CORS for local frontend dev (Angular default port 4200)
# On AWS Lambda, we let the Lambda Function URL handle CORS to avoid duplicate headers.
if not os.environ.get("AWS_LAMBDA_FUNCTION_NAME"):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:4200", "http://127.0.0.1:4200", "http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


app.include_router(enquiry.router)


@app.get("/", summary="Root endpoint")
async def root():
    """Simple root endpoint to verify the service is running."""
    return {"message": "Welcome to Vipanchi Bakery API"}

# AWS Lambda Handler
handler = Mangum(app)

