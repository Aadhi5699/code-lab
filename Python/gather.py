#1
import asyncio

async def work(n):
   print(f"start {n}") 
   await asyncio.sleep(n)
   print(f"end {n}")

async def main():
   #gather() preserves argument order
   results =  await asyncio.gather(work(3),work(1),work(2))
   print(results)

asyncio.run(main())

#2
import asyncio

async def worker(name):
    print(f"{name}-1")
#forces the currently running coroutine to pause and hand control back to the event loop
    await asyncio.sleep(0) 

    print(f"{name}-2")

async def main():
    await asyncio.gather(
        worker("A"),
        worker("B")
    )

asyncio.run(main())