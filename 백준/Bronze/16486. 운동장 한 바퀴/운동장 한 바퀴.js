const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [d1, d2] = input.map(Number);
console.log((d1 * 2 + d2 * 2 * 3.141592).toFixed(6));
