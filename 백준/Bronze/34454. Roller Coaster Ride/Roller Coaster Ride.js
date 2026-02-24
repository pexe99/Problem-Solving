const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, C, P] = input.map(Number);
console.log(N <= C * P ? "yes" : "no");
