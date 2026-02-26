const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [R1, S] = input[0].split(" ").map(Number);
console.log(S * 2 - R1);
