# import asyncio
# async def hello():
#     print("Hello")

# async def result():
#     await hello()

# asyncio.run(result())

import asyncio

async def task1():
    await asyncio.sleep(3)

async def task2():
    await asyncio.sleep(3)

async def main():
    #both coroutines are scheduled immediately.
    await asyncio.gather(
        task1(),
        task2()
    )

asyncio.run(main())