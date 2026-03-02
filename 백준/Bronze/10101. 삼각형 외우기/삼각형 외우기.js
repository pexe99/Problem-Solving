const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c] = input.map(Number);
console.log(
  a + b + c !== 180
    ? "Error"
    : a === 60 && b === 60 && c === 60
    ? "Equilateral"
    : a === b || b === c || a === c
    ? "Isosceles"
    : "Scalene"
);
