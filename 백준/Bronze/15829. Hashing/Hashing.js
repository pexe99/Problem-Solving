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
  .map((char) => char.charCodeAt(char) - "a".charCodeAt() + 1);

console.log(
  string.reduce((acc, cur, idx) => (acc + cur * Math.pow(r, idx)) % M, 0)
);
