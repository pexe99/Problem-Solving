const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [n1, k1, n2, k2] = input[0].split(" ").map(Number);
console.log(n1 * k1 + n2 * k2);
