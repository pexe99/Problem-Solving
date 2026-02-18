const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  "  ___  ___  ___\n  | |__| |__| |\n  |           |\n   \\_________/\n    \\_______/\n     |     |\n     |     |\n     |     |\n     |     |\n     |_____|\n  __/       \\__\n /             \\\n/_______________\\"
);
