const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log([1, 2, 3, 4, 5, 4, 3, 2][(+input - 1) % 8]);
