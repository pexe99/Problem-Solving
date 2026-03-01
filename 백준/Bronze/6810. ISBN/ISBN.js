const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  `The 1-3-sum is ${[..."9780921418", ...input].reduce(
    (acc, cur, idx) => acc + +cur * (idx % 2 ? 3 : 1),
    0
  )}`
);
