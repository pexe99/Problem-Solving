const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(0, input.length - 1)
  .forEach((line) =>
    console.log(
      [...line.toLowerCase()].filter((c) => c.match(/[aeiou]/)).length
    )
  );
