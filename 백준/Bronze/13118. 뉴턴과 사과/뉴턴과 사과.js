const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [x, y, r] = input[1].split(" ").map(Number);
console.log(
  input[0].split(" ").reduce((acc, cur, idx) => (+cur === x ? idx + 1 : acc), 0)
);
