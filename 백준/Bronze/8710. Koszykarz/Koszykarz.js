const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [k, w, m] = input[0].split(" ").map(Number);
console.log(Math.ceil((w - k) / m));
