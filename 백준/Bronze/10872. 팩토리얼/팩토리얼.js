const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  new Array(+input[0]).fill(0).reduce((acc, _, idx) => acc * (idx + 1), 1)
);
