const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  { M: "MatKor", W: "WiCys", C: "CyKor", A: "AlKor", $: "$clear" }[input[0]]
);
