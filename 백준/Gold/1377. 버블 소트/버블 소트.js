const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = input[0];
const numbers = input
  .slice(1)
  .map((e, i) => [+e, i])
  .sort((a, b) => a[0] - b[0]);

console.log(
  numbers.reduce((acc, cur, idx) => Math.max(acc, cur[1] - idx), 0) + 1
);
