const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const numbers = input.map((e, i) => [e, i]).filter(([e, i]) => +e);
const next = +numbers[0][0] + 3 - numbers[0][1];

console.log(
  next % 3 === 0
    ? next % 5 === 0
      ? "FizzBuzz"
      : "Fizz"
    : next % 5 === 0
    ? "Buzz"
    : next
);
