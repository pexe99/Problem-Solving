const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  { F: "Foundation", C: "Claves", V: "Veritas", E: "Exploration" }[input[0][0]]
);
