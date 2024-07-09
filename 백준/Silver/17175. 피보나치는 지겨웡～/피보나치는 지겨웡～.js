const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const DIVISOR = 1000000007;
const N = +input;
const fibo = Array.from({ length: 51 }, (_, i) => (i < 2 ? 1 : 0));
for (let i = 2; i <= N; i++)
  fibo[i] = (fibo[i - 1] + fibo[i - 2] + 1) % DIVISOR;
console.log(fibo[N]);
