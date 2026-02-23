const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[A], [W, V]] = input.map((line) => line.split(" ").map(Number));
console.log(+(A <= W / V));
