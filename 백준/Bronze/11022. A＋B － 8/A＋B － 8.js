const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .slice(1)
    .map((str, idx) => {
      const [a, b] = str.split(" ").map(Number);
      return `Case #${idx + 1}: ${a} + ${b} = ${a + b}`;
    })
    .join("\n")
);
