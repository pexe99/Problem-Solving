const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const result = input[1].split(" ").reduce((acc, cur) => acc + +cur, 0);
console.log(result === 0 ? "Stay" : result > 0 ? "Right" : "Left");
