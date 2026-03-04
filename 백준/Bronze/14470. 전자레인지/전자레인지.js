const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c, d, e] = input.map(Number);
console.log((a < 0 ? Math.abs(a) * c + d : 0) + (b - (a < 0 ? 0 : a)) * e);
