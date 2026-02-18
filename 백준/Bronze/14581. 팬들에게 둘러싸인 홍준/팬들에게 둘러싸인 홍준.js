const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(`:fan::fan::fan:
:fan::${input[0]}::fan:
:fan::fan::fan:`);
