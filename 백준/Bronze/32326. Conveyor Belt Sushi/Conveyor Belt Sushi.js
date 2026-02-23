const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [R, G, B] = input.map(Number);
console.log(R * 3 + G * 4 + B * 5);
