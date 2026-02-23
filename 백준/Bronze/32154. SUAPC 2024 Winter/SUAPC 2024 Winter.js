const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

[
  [[11], ["A", "B", "C", "D", "E", "F", "G", "H", "J", "L", "M"]],
  [[9], ["A", "C", "E", "F", "G", "H", "I", "L", "M"]],
  [[9], ["A", "C", "E", "F", "G", "H", "I", "L", "M"]],
  [[9], ["A", "B", "C", "E", "F", "G", "H", "L", "M"]],
  [[8], ["A", "C", "E", "F", "G", "H", "L", "M"]],
  [[8], ["A", "C", "E", "F", "G", "H", "L", "M"]],
  [[8], ["A", "C", "E", "F", "G", "H", "L", "M"]],
  [[8], ["A", "C", "E", "F", "G", "H", "L", "M"]],
  [[8], ["A", "C", "E", "F", "G", "H", "L", "M"]],
  [[8], ["A", "B", "C", "F", "G", "H", "L", "M"]],
][+input[0] - 1].forEach((e) => console.log(e.join(" ")));