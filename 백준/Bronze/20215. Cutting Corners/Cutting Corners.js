const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [W, H] = input[0].split(" ").map(Number);
console.log((W + H - Math.sqrt(W ** 2 + H ** 2)).toFixed(6));
