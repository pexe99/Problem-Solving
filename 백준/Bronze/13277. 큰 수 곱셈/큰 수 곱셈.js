const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input[0]
    .split(" ")
    .reduce((acc, cur) => acc * BigInt(cur), 1n)
    .toString()
);
