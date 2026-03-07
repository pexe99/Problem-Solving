const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, x, b, y, T] = input.map(Number);
console.log(
  `${a + (T <= 30 ? 0 : T - 30) * x * 21} ${
    b + (T <= 45 ? 0 : T - 45) * y * 21
  }`
);
