const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  [
    [12, 1600],
    [11, 894],
    [11, 1327],
    [10, 1311],
    [9, 1004],
    [9, 1178],
    [9, 1357],
    [8, 837],
    [7, 1055],
    [6, 556],
    [6, 773],
  ][+input[0] - 1].join(" ")
);
