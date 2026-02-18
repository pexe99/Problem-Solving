const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [Ur, Tr, Uo, To] = input[0].split(" ").map(Number);
console.log(56 * Ur + 24 * Tr + 14 * Uo + 6 * To);
