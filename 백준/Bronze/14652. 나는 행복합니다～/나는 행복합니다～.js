const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
console.log(`${Math.floor(k / m)} ${k % m}`);
