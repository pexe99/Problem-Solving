const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

console.log(Math.abs(input[0].split(" ").reduce((acc, cur) => +acc - +cur)));
