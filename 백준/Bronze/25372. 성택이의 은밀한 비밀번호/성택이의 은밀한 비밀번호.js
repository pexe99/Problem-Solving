const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(1)
  .forEach((e) => console.log(6 <= e.length && e.length <= 9 ? "yes" : "no"));
