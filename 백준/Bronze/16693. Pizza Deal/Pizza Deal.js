const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[A1, P1], [A2, P2]] = input.map((e) => e.split(" ").map(Number));
console.log(
  P1 / A1 > P2 / (A2 ** 2 * Math.PI) ? "Whole pizza" : "Slice of pizza"
);
