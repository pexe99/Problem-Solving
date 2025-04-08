const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const tShirts = input[1].split(" ").map((e) => +e);
const [T, P] = input[2].split(" ").map((e) => +e);

console.log(tShirts.reduce((acc, cur) => acc + Math.ceil(cur / T), 0));
console.log(Math.floor(N / P) + " " + (N % P));
