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