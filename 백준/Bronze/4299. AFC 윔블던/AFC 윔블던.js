const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [X, Y] = input[0].split(" ").map(Number);
console.log(
  X >= Y && X >= 0 && Y >= 0 && (X + Y) % 2 === 0 && (X - Y) % 2 === 0
    ? `${(X + Y) / 2} ${(X - Y) / 2}`
    : -1
);
