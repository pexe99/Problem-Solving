const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(((3.785411784 / (+input[0] * 1.609344)) * 100).toFixed(6));
