const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c] = input[0]
  .split(" ")
  .map(Number)
  .sort((x, y) => y - x);
console.log(
  a === b && b === c
    ? 10000 + a * 1000
    : a === b || a === c
    ? 1000 + a * 100
    : b === c
    ? 1000 + b * 100
    : a * 100
);
