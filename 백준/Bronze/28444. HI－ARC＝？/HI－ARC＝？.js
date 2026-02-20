const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [H, I, A, R, C] = input[0].split(" ").map(Number);
console.log(H * I - A * R * C);
