const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, A, B] = input[0].split(" ").map(Number);
console.log(A === B ? "Anything" : A < B ? "Bus" : "Subway");
