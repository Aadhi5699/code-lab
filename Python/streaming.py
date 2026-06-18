from fastapi.responses import StreamingResponse

@app.get("/chat")
async def chat():

    async def generate():
        for chunk in llm_stream():
            yield chunk

    return StreamingResponse(generate())