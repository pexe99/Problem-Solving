const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [A, B] = input.map(Number);
console.log(A * 1000 + B * 10000);
