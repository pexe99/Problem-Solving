const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((line) => {
  const [a, b, x] = line.split(" ").map(Number);
  console.log(a * (x - 1) + b);
});
