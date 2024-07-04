const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [X, _, ...products] = input.map((str) => str.split(" ").map((e) => +e));

console.log(
  +X === products.reduce((res, [a, b]) => res + a * b, 0) ? "Yes" : "No"
);
