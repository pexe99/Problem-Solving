def solution(money):
    return max(dp(money, 0, len(money) - 1), dp(money, 1, len(money)))

def dp(money, start, end):
    a, b = money[start], max(money[start], money[start + 1])
    for i in range(start + 2, end):
        next = max(b, a + money[i])
        a, b = b, next
    return b
    