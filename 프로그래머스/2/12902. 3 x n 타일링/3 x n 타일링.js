function solution(n) {
    if(n % 2) return 0;
    
    const DIVISOR = 1_000_000_007;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    let left = 0;
    for(let i = 2; i <= n; i += 2) {
        left = ((dp[i - 4] || 0) + left) % DIVISOR;
        dp[i] = (dp[i - 2] * 3 + 2 * left) % DIVISOR;
    }
    return dp[n];
}