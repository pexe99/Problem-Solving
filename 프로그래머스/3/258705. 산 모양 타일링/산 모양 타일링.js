const DIVISOR = 10007;

function solution(n, tops) {
    const dp = Array.from({length: tops.length * 2 + 1}, () => 0);
    dp[0] = 1; dp[1] = tops[0] === 1 ? 3 : 2;
    for(let i = 2; i < 2 * tops.length + 1; i++) {
        if(i % 2 === 1 && tops[(i - 1) / 2] === 1) 
            dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % DIVISOR;
        else dp[i] = (dp[i - 1] + dp[i - 2]) % DIVISOR;
    }
    console.log(dp);
    return dp.at(-1);
}