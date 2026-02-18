const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.forEach((str) => {
  const [n, s] = str.split(" ").map(Number);
  console.log(Math.floor(s / (n + 1)));
});
