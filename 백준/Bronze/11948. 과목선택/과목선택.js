const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .slice(0, 4)
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cur) => acc + +cur, 0) +
    input
      .slice(4)
      .map(Number)
      .sort((a, b) => b - a)[0]
);
