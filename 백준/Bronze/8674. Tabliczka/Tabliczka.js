const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);
console.log(a % 2 === 0 || b % 2 === 0 ? 0 : Math.min(a, b));
