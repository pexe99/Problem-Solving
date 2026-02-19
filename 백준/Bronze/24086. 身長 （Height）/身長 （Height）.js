const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  Math.abs(
    input.reduce((acc, cur, idx) => (acc + +cur * (idx === 0 ? 1 : -1)), 0)
  )
);
