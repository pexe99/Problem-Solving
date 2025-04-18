const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const REGEXP = /[A-Z]/g;

const formula = input[0].trim().split("").reverse();
const number = [];
const operator = [];

const priority = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

while (formula.length) {
  const e = formula.pop();
  if (REGEXP.test(e)) number.push(e);
  else if (e === "(") {
    operator.push(e);
  } else if (e === ")") {
    while (operator.length && operator[operator.length - 1] !== "(") {
      number.push(operator.pop());
    }
    operator.pop();
  } else {
    while (
      operator.length &&
      priority[operator[operator.length - 1]] >= priority[e]
    ) {
      number.push(operator.pop());
    }
    operator.push(e);
  }
}

while (operator.length) number.push(operator.pop());

console.log(number.join(""));
