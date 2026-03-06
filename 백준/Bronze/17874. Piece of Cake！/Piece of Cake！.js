const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [n, h, v] = input[0].split(" ").map(Number);
console.log(Math.max(n - h, h) * Math.max(n - v, v) * 4);
