const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [D, H, M] = input[0].split(" ").map(Number);
const diff = D * 24 * 60 + H * 60 + M - (11 * 24 * 60 + 11 * 60 + 11);
console.log(diff >= 0 ? diff : -1);
