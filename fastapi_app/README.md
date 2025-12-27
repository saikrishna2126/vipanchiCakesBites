# FastAPI Application

This folder contains the FastAPI backend for the project.

## How to Start the FastAPI App

1. **Install dependencies**

   Open a terminal in this directory and run:
   
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the FastAPI app**

   From the `fastapi_app` directory, run:
   
   ```bash
   uvicorn app.main:app --reload
   ```
   
   - The app will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

## Project Structure

- `app/` - Main FastAPI application code
- `requirements.txt` - Python dependencies
- `tests/` - Test files

---

For any issues, check the logs in the terminal or refer to the FastAPI documentation: https://fastapi.tiangolo.com/
