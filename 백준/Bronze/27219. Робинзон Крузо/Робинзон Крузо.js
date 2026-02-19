const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log("V".repeat(Math.abs(+input[0] / 5)) + "I".repeat(+input[0] % 5));
