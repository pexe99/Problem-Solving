const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i += 2)
  console.log(`Case ${(i + 1) / 2}: ${input[i + 1]}, ${input[i]}`);
