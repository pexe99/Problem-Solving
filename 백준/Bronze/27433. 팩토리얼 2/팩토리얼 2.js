const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const factorial = (i) => (i === 0 ? 1 : i * factorial(i - 1));
console.log(factorial(+input[0]));
