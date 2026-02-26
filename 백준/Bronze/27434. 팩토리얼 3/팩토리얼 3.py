import sys

N = int(sys.stdin.readline())

result = 1;
for i in range(1, N + 1):
    result *= i;

print(result)