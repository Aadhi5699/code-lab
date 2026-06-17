#1
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


#2

import asyncio

async def task(n):
    print(f"start-{n}")

    try:
        await asyncio.sleep(5)
    except asyncio.CancelledError:
        print(f"cancel-{n}")
        raise

    print(f"end-{n}")

async def main():
    t = asyncio.create_task(task(1))

    await asyncio.sleep(1)

    t.cancel()

    try:
        await t
    except asyncio.CancelledError:
        print("main-caught")

asyncio.run(main())