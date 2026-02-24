const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[A, B], [C, D]] = input.map((line) => line.split(" ").map(Number));
console.log(
  A + C < B + D ? "Hanyang Univ." : A + C === B + D ? "Either" : "Yongdap"
);
