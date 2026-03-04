const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [R, C, N] = input[0].split(" ").map(Number);
console.log(Math.ceil(R / N) * Math.ceil(C / N));
