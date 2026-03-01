const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const BMI = +input[0] / (+input[1]) ** 2;
console.log(
  BMI < 18.5 ? "Underweight" : BMI <= 25 ? "Normal weight" : "Overweight"
);
