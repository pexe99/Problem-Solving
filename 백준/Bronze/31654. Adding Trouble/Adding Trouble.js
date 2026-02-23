const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
console.log(A + B === C ? "correct!" : "wrong!");
