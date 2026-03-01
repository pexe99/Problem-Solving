const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

for (let i = +input[0]; i <= +input[1]; i += 60)
  console.log(`All positions change in year ${i}`);
