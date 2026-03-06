const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const score = input[0].split(" ").map(Number);
const sum = score.reduce((acc, cur) => acc + cur, 0);
const min = Math.min(...score);
console.log(
  100 <= sum
    ? "OK"
    : score[0] === min
    ? "Soongsil"
    : score[1] === min
    ? "Korea"
    : "Hanyang"
);
