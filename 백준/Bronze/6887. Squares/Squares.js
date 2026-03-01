const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  `The largest square has side length ${Math.floor(Math.sqrt(+input[0]))}.`
);
