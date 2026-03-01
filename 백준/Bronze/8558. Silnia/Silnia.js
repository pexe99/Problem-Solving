const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  new Array(+input[0]).fill().reduce((acc, _, i) => (acc * (i + 1)) % 10, 1)
);
