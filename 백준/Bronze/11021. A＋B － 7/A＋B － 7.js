const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input.slice(1)
    .map(
      (str, idx) =>
        `Case #${idx + 1}: ${str
          .split(" ")
          .reduce((acc, cur) => acc + +cur, 0)}`
    )
    .join("\n")
);
