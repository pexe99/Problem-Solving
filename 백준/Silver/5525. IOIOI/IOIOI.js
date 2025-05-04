const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const S = +input[1];
const str = input[2];

let result = 0;
let i = 0;
let count = 0;

while (i < S - 2) {
  if (str[i] === "I" && str[i + 1] === "O" && str[i + 2] === "I") {
    count++;
    i += 2;
    if (count === N) {
      result++;
      count--;
    }
  } else {
    i++;
    count = 0;
  }
}

console.log(result);
