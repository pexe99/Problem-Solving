const DIVIDER = 1000000007;

function solution(n, count) {
    const dp = Array.from({length: n + 1}, () => Array.from({length: n + 1}, () => 0))
    dp[1][1] = 1;
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i][j] = ((dp[i - 1][j - 1] || 0) + dp[i - 1][j] * 2 * (i - 1)) % DIVIDER;
        }
    }
    return dp[n][count];
}