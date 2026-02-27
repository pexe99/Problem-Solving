const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  Array.from(
    { length: +input[0] },
    (_, i) => `${i !== 0 && i % 6 === 0 ? "Go! " : ""}${i + 1}`
  ).join(" ") + " Go!"
);
