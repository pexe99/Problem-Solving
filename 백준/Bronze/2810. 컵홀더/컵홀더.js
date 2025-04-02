const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
let chair = input[1];
let counter = 1,
  index = 0;
while (index < chair.length) {
  index += chair[index] === "S" ? 1 : 2;
  counter++;
}

console.log(Math.min(N, counter));
