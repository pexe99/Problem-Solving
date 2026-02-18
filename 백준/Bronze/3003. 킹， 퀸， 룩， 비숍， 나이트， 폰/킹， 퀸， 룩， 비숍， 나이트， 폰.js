const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const chess = [1, 1, 2, 2, 2, 8];
console.log(
  input[0]
    .split(" ")
    .map((e, i) => chess[i] - +e)
    .join(" ")
);
