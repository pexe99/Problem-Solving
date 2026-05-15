T = int(input())
for test_case in range(1, T + 1):
    total, diff = map(int, input().split())
    A = (total + diff) // 2
    B = total - A
    print(A, B)
