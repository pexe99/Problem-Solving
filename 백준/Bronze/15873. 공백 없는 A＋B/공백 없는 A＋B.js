const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input[0].length === 4
    ? 20
    : input[0].length === 3
    ? input[0][1] === "0"
      ? 10 + +input[0][2]
      : 10 + +input[0][0]
    : +input[0][0] + +input[0][1]
);
