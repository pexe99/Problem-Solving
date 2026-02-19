const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const month = 1 + +input[0] * 7;
console.log(
  `${2024 + Math.floor(month / 12) - +(month % 12 === 0)} ${month % 12 || 12}`
);
