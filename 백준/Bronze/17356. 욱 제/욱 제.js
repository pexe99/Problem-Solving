const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);
console.log((1 / (1 + 10 ** ((B - A) / 400))).toFixed(4));
