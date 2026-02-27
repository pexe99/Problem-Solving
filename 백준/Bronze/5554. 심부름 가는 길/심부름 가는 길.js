const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const sum = input.reduce((acc, cur) => acc + +cur, 0);
console.log(`${Math.floor(sum / 60)}\n${sum % 60}`);
