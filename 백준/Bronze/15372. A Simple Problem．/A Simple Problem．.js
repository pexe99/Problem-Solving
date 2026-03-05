const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

process.stdout.write(
  input
    .slice(1)
    .map((e) => (+e) ** 2)
    .join("\n")
);
