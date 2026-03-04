const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[a, b], c] = input.map((line) => line.split(" ").map(Number));
console.log(2 * c <= a + b ? a + b - 2 * c : a + b);
