const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [p1, q1, p2, q2] = input[0].split(" ").map(Number);
const area = ((p1 / q1) * p2) / q2 / 2;
console.log(area === Math.floor(area) ? 1 : 0);
