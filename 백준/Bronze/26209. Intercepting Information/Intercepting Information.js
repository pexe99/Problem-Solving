const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(new Set(input[0].split(" ").map(Number)).has(9) ? "F" : "S");
