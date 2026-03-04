const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [s, t, d] = input[0].split(" ").map(Number);
console.log((d / (s * 2)) * t);
