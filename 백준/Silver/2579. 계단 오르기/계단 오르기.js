const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const stair = input.slice(1).map((e) => +e);

const dp = new Array(N).fill(0);

if (N === 1) {
  console.log(stair[0]);
} else if (N === 2) {
  console.log(stair[0] + stair[1]);
} else {
  dp[0] = stair[0];
  dp[1] = stair[0] + stair[1];
  dp[2] = Math.max(stair[0] + stair[2], stair[1] + stair[2]);
  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + stair[i - 1]) + stair[i];
  }
  console.log(dp[N - 1]);
}
