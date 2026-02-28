const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  Math.max(
    ...input.map((e) => e.split(" ").reduce((acc, cur) => acc + +cur, 0))
  )
);
