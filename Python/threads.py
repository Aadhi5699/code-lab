import threading

counter = 0
# 1. Create a global lock object
counter_lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        # 2. Acquire the lock before modifying shared state
        with counter_lock:
            counter += 1  # Safe and atomic now

t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)

t1.start()
t2.start()

t1.join()
t2.join()

print(counter)  # Will ALWAYS print 200000
