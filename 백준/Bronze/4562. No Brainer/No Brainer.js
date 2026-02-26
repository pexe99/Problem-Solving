const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((line) => {
  const [X, Y] = line.split(" ").map(Number);
  console.log(X >= Y ? "MMM BRAINS" : "NO BRAINS");
});
