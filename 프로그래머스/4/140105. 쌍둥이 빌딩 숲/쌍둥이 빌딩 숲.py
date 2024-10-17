DIVIDER = 1000000007

def solution(n, count):
    dp = [[0 for _ in range(n + 1)] for _ in range(n + 1)]
    dp[1][1] = 1
    for i in range(2, n + 1):
        for j in range(1, i + 1):
            placeFront = dp[i - 1][j - 1] if j > 1 else 0
            placeBack = dp[i - 1][j] * 2 * (i - 1)
            dp[i][j] = (placeFront + placeBack) % DIVIDER
    return dp[n][count]
