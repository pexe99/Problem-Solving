const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[a, b], [c, d]] = input.map((line) => line.split(" ").map(Number));
console.log(Math.min(a + d, b + c));
