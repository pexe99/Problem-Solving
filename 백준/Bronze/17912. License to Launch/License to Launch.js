const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input[1]
    .split(" ")
    .reduce(
      (acc, cur, idx) => (+cur < acc[1] ? [idx, cur] : acc),
      [0, Infinity]
    )[0]
);
