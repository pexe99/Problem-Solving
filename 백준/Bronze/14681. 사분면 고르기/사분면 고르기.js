const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [x, y] = input.map(Number);

console.log(x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);
