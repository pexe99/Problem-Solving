const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim();

const solution = (s) => {
  const N = s.length;
  const dp = new Array(N).fill(Infinity);
  dp[0] = 1;

  for (let i = 0; i < 2 * N - 1; i++) {
    let start = i >> 1;
    let end = (i + 1) >> 1;
    while (0 <= start && end < N) {
      if (s[start] === s[end]) {
        const current = (dp[start - 1] || 0) + 1;
        dp[end] = Math.min(dp[end], current);
        start--;
        end++;
      } else break;
    }
  }

  return dp[N - 1];
};

console.log(solution(input));
