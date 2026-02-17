const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.forEach((e) => {
  const [x, y] = e.split(" ").map(Number);
  if (x === 0 || y === 0) console.log("AXIS");
  else console.log(x > 0 ? (y > 0 ? "Q1" : "Q4") : y > 0 ? "Q2" : "Q3");
});
