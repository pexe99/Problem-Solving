const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [A, B, C, D, E] = input.map(Number);
console.log(Math.min(A, B, C) + Math.min(D, E) - 50);
