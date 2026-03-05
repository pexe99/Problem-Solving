const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, A, B, C, D] = input[0].split(" ").map(Number);
console.log(Math.min(Math.ceil(N / A) * B, Math.ceil(N / C) * D));
