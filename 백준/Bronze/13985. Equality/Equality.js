const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c] = input[0].split(/\s[+=]\s/).map(Number);
console.log(a + b === c ? "YES" : "NO");
