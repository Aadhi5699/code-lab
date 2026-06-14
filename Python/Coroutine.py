import asyncio

async def work (n):
    print(f"start {n}")
    await asyncio.sleep(1)
    print(f"end {n}")

async def main ():
    c1 = work(1) # coroutine created, not running yet
    c2 = work(2) # coroutine created, not running yet
    #Coroutines don't run until awaited.
    await c1 # runs now
    await c2 # runs now

asyncio.run(main())

