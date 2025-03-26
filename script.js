import heapq

def mincost(arr):
    heapq.heapify(arr)  # Convert list to min-heap
    cost = 0
    
    while len(arr) > 1:
        a = heapq.heappop(arr)
        b = heapq.heappop(arr)
        cost += a + b
        heapq.heappush(arr, a + b)
    
    return cost

# Example usage:
print(mincost([4, 3, 2, 6]))  # Output: 29
print(mincost([1, 2, 3, 4, 5]))  # Output: 33

