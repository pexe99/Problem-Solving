const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const grade = {
  "A+": 4.3,
  A0: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B0: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C0: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D0: 1.0,
  "D-": 0.7,
  F: 0.0,
};

const [[N], ...scores] = input.map((e) => e.split(" "));
const [totalScore, totalGrade] = scores.reduce(
  (acc, [__dirname, s, g]) => [acc[0] + +s, acc[1] + grade[g] * +s],
  [0, 0]
);
console.log((Math.round((totalGrade / totalScore) * 100) / 100).toFixed(2));
