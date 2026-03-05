const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [left, right] = input[0].split(" ").map(Number);
console.log(
  left === right
    ? left === 0
      ? "Not a moose"
      : `Even ${left * 2}`
    : `Odd ${Math.max(left, right) * 2}`
);
