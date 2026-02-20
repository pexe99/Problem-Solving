const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  !new Set([...input[0]]).has("7")
    ? +input[0] % 7
      ? 0
      : 1
    : +input[0] % 7
    ? 2
    : 3
);
