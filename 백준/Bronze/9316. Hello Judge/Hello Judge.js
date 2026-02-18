const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

for(let i = 1; i <= +input[0]; i++) console.log(`Hello World, Judge ${i}!`);
