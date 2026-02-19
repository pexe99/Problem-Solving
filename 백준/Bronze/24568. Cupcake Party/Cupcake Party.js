const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b] = input.map(Number);
console.log(a * 8 + b * 3 - 28);
