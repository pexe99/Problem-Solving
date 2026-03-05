const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c] = input.map(Number);
console.log(Math.min(a + c, 2 * a + b, b + 2 * c) * 2);
