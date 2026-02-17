const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.pop();
const dp = [BigInt(0), BigInt(1)];
for (let i = 2; i <= 490; i++) dp[i] = BigInt(dp[i - 1] + dp[i - 2]);
input.forEach((e) => console.log(`Hour ${e}: ${dp[+e]} cow(s) affected`));
