const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c, d] = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(Math.abs(d + a - b - c));
