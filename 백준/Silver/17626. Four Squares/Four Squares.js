const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];

const dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;
dp[1] = 1;

for (let num = 2; num <= N; num++) {
  for (let i = 1; i * i <= num; i++) {
    dp[num] = Math.min(dp[num], dp[num - i * i] + 1);
  }
}

console.log(dp[N]);
