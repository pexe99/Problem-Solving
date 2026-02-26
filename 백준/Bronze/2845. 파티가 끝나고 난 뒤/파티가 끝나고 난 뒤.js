const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [L, P] = input[0].split(" ").map(Number);
console.log(
  input[1]
    .split(" ")
    .map(Number)
    .map((num) => num - L * P)
    .join(" ")
);
