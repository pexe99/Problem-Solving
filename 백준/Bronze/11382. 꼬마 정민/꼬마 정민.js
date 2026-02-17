const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

console.log(input[0].split(" ").reduce((acc, cur) => acc + +cur, 0));
