const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [T, S] = input[0].split(" ").map(Number);
console.log(12 <= T && T <= 16 && S === 0 ? 320 : 280);
