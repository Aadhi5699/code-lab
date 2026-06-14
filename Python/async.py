import asyncio
import time


async def fetch_data(param):
    print(f"Do something with {param}...")
    await asyncio.sleep(param)  #Pause this coroutine for 1 or 2 second
    print(f"Done with {param}")
    return f"Result of {param}"


async def main():
    task1 = fetch_data(1)  # creates coroutine obj
    task2 = fetch_data(2)  # another coroutine obj
    result1 = await task1  # event loop executes
    print("Task 1 fully completed")
    result2 = await task2
    print("Task 2 fully completed")
    return [result1, result2]


async def main():
    task1 = asyncio.create_task(fetch_data(1)) # this will run concurrently
    task2 = asyncio.create_task(fetch_data(2))

    result1 = await task1
    result2 = await task2

    return [result1, result2]


t1 = time.perf_counter()

results = asyncio.run(main()) # creates an event loop and runs the main
print(results)

t2 = time.perf_counter()
print(f"Finished in {t2 - t1:.2f} seconds")