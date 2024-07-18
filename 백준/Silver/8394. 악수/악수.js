const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = +input;
const DP = [1, 1];
while (DP.length <= n) DP.push((DP.at(-1) + DP.at(-2)) % 10);
console.log(DP.at(-1));
