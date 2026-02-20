const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const number = Array.from({ length: +input[0] }, (_, i) => i + 1);
console.log(number.reduce((acc, cur) => acc + cur, 0));
console.log(number.reduce((acc, cur) => acc + cur, 0) ** 2);
console.log(number.reduce((acc, cur) => acc + cur ** 3, 0));
