const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [A, T] = input[0].split(" ").map(Number);
const result = 10 + 2 * (25 - A + T);
console.log(result < 0 ? 0 : result);
