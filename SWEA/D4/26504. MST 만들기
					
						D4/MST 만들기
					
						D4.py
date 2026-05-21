
T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    edges = list(map(int, input().split()))
    edges.sort()

    min_cost = sum(edges[:N-1])
    max_cost = 0
    idx = 0
    for step in range(1, N):
        max_cost += edges[idx]
        idx += step
    
    print(f'{min_cost} {max_cost}')