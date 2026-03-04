const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(String.fromCharCode("가".charCodeAt(0) + +input[0] - 1));
