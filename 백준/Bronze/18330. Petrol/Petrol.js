const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [n, k] = input.map(Number);
const left = k + 60;
console.log((n < left ? 0 : n - left) * 3000 + (n < left ? n : left) * 1500);
