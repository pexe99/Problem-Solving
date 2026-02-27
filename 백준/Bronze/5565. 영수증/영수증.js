const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [total, ...arr] = input.map(Number);
console.log(total - arr.reduce((a, b) => a + b, 0));
