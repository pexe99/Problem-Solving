const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [L, A, B, C, D] = input.map(Number);
console.log(L - Math.max(Math.ceil(A / C), Math.ceil(B / D)));
