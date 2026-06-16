# import asyncio
# async def hello():
#     print("Hello")

# async def result():
#     await hello()

# asyncio.run(result())

# import asyncio

# async def task1():
#     await asyncio.sleep(3)

# async def task2():
#     await asyncio.sleep(3)

# async def main():
#     #both coroutines are scheduled immediately.
#     await asyncio.gather(
#         task1(),
#         task2()
#     )

# asyncio.run(main())


import asyncio

async def worker():
    print("working")
    await asyncio.sleep(2)
    print("done") 

async def main():
    #Creating a task does not guarantee completion.The event loop must stay alive.
    asyncio.create_task(worker())
    print("main finished")  

#asyncio.run(main()) , only waits for main() to complete,the event loop shuts down.
asyncio.run(main())