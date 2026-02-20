const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(+input[1] - (20 <= +input[0] ? +input[0] - 24 : +input[0]));
