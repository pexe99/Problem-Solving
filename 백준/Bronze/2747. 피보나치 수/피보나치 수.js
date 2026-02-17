const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const dp = [0, 1];
for (let i = 2; i <= +input[0]; i++) dp[i] = dp[i - 1] + dp[i - 2];
console.log(dp[+input[0]]);
