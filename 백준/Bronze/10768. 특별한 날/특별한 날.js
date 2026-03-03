const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [m, d] = input.map(Number);
console.log(
  m < 2 || (m === 2 && d < 18)
    ? "Before"
    : m === 2 && d === 18
    ? "Special"
    : "After"
);
