const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [A, B] = input.map(BigInt);
console.log(`${String(A + B)}\n${String(A - B)}\n${String(A * B)}`);
