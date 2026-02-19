const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [hh, mm] = input[0].split(" ").map(Number);
console.log((hh - 9) * 60 + mm);
