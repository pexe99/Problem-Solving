const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b] = input.map(Number);
console.log(a <= b ? "high speed rail" : "flight");
