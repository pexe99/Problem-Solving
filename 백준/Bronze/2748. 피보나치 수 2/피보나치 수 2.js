const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const N = +input[0];
const dp = [BigInt(0), BigInt(1)];
for (let i = 2; i <= N; i++) dp[i] = BigInt(dp[i - 1] + dp[i - 2]);
console.log(dp[N].toString());
