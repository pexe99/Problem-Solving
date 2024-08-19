const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const expression = ["{}"];
const N = +input[0];
const numbers = input
  .slice(1)
  .map((str) => Math.log2(str.replaceAll(/[,\r]/g, "").length) - 1);

const getExpression = (number) => {
  if (expression.length - 1 < number) {
    getExpression(number - 1);
    expression.push(`{${expression.slice(0, number).join(",")}}`);
  }
  return expression[number];
};

for (let i = 0; i < N; i++) {
  let result = numbers[i * 2] + numbers[i * 2 + 1];
  getExpression(result);
  console.log(getExpression(result));
}
