const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .map((e, i) =>
      i === 0
        ? "Gnomes:"
        : e
            .split(" ")
            .map(Number)
            .sort((a, b) => a - b)
            .join(" ") === e ||
          e
            .split(" ")
            .map(Number)
            .sort((a, b) => b - a)
            .join(" ") === e
        ? "Ordered"
        : "Unordered"
    )
    .join("\n")
);
