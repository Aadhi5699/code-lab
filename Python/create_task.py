import asyncio

async def work(n):
    print(f"start {n}")
    await asyncio.sleep(1)
    print(f"End {n}")


async def main():
    task1 = asyncio.create_task(work(1))
    task2 = asyncio.create_task(work(2))
#create_task() starts execution immediately.
    await task1
    await task2

asyncio.run(main())