const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N], numbers, [v]] = input.map((e) => e.split(" ").map(Number));

const counter = [];
numbers.forEach((n) => (counter[n] = (counter[n] || 0) + 1));

console.log(counter[v] || 0);
