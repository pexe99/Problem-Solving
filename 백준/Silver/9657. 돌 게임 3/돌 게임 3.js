const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const N = +input[0];

const solution = (N) => {
  const dp = new Array(N + 1).fill(false);
  dp[1] = dp[3] = dp[4] = true;

  for (let i = 5; i <= N; i++)
    dp[i] = [dp[i - 1], dp[i - 3], dp[i - 4]].filter((e) => !e).length
      ? true
      : false;

  return dp[N] ? "SK" : "CY";
};

console.log(solution(N));
