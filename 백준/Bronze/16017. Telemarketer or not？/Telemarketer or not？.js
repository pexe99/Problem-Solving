const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  8 <= +input[0] && input[1] === input[2] && 8 <= +input[3]
    ? "ignore"
    : "answer"
);
