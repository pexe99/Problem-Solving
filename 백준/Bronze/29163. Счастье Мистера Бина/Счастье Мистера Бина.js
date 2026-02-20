const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input[1].split(" ").reduce((acc, cur) => acc + (+cur % 2 === 0 ? 1 : -1), 0) >
    0
    ? "Happy"
    : "Sad"
);
