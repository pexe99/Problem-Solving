const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [X, L, R] = input[0].split(" ").map(Number);
console.log(X < L ? L : R < X ? R : X);
