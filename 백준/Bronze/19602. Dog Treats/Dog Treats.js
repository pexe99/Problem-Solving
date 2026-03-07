const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  10 <= input.reduce((acc, cur, idx) => acc + +cur * (idx + 1), 0)
    ? "happy"
    : "sad"
);
