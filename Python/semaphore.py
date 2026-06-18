import asyncio


async def worker(name, semaphore):
    async with semaphore:
        print(f"start {name}")
        await asyncio.sleep(2)
        print(f"End {name}")


async def main():
    tasks = ["A", "B", "C", "D", "E"]
    semaphore = asyncio.Semaphore(2)
    await asyncio.gather(*(worker(task, semaphore) for task in tasks))
    

if __name__ == "__main__":
    asyncio.run(main())