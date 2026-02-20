const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const lambda = Number(input[0]);
console.log(
  lambda < 425
    ? "Violet"
    : lambda < 450
    ? "Indigo"
    : lambda < 495
    ? "Blue"
    : lambda < 570
    ? "Green"
    : lambda < 590
    ? "Yellow"
    : lambda < 620
    ? "Orange"
    : "Red"
);
