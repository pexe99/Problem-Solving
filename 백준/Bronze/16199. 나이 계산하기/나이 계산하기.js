const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[by, bm, bd], [cy, cm, cd]] = input.map((line) =>
  line.split(" ").map(Number)
);
const age = cy * 365 + cm * 30 + cd - (by * 365 + bm * 30 + bd);
console.log(`${Math.floor(age / 365)}\n${cy - by + 1}\n${cy - by}`);
