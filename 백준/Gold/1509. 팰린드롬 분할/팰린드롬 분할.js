const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim();

const solution = (s) => {
  const N = s.length;
  const dp = Array.from({ length: N }, () => Infinity);
  const isPal = Array.from({ length: N }, (_, i) =>
    Array.from({ length: N }, (_, j) => i === j)
  );

  for (let len = 2; len <= N; len++) {
    for (let i = 0; i + len - 1 < N; i++) {
      const j = i + len - 1;
      isPal[i][j] = s[i] === s[j] && (len === 2 || isPal[i + 1][j - 1]);
    }
  }

  dp[0] = 1;
  for (let j = 1; j < N; j++) {
    for (let i = 0; i <= j; i++) {
      if (isPal[i][j]) dp[j] = Math.min((dp[i - 1] || 0) + 1, dp[j]);
    }
  }

  return dp[N - 1];
};

console.log(solution(input));
