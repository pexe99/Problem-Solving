const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(["CY", "SK", "CY", "SK", "SK", "SK", "SK"][+input[0] % 7]);
