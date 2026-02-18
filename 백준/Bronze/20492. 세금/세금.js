const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(`${+input[0] * 0.78} ${+input[0] * 0.8 + 0.2 * +input[0] * 0.78}`);
