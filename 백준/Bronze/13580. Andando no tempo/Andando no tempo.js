const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b, c] = input[0].split(" ").map(Number).sort((a, b) => a - b);
console.log(a === b || b === c || a + b === c ? "S" : "N");
