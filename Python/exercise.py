@app.get("/users")
async def get_users():
    data = requests.get( # this synchronous lib block the event loop
        "https://api.example.com/users"
    )
    return data.json()


import httpx
from fastapi import FastAPI

app = FastAPI()
async_client = httpx.AsyncClient()

@app.get("/users")
async def get_users():
    # Use await so the event loop can switch to other tasks
    # or remove async , it runs on thread pool instead of event loop.
    response = await async_client.get("https://api.example.com/users")
    return response.json()
