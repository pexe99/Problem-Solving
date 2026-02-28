const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  new Set(input).size === 1
    ? "Fish At Constant Depth"
    : new Set(input).size !== 4
    ? "No Fish"
    : input.join(" ") ===
      input
        .map(Number)
        .sort((a, b) => a - b)
        .join(" ")
    ? "Fish Rising"
    : input.join(" ") ===
      input
        .map(Number)
        .sort((a, b) => b - a)
        .join(" ")
    ? "Fish Diving"
    : "No Fish"
);
