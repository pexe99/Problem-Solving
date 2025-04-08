const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const r = 31;
const M = 1234567891;

const N = +input[0];
const string = input[1]
  .split("")
  .map((char) => char.charCodeAt() - "a".charCodeAt() + 1);

let hash = 0;
let power = 1;

for (let i = 0; i < N; i++) {
  hash = (hash + string[i] * power) % M;
  power = (power * r) % M;
}

console.log(hash);
