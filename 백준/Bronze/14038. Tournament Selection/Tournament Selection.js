const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const win = input.filter((e) => e === "W").length;
console.log(5 <= win ? 1 : 3 <= win ? 2 : 1 <= win ? 3 : -1);
