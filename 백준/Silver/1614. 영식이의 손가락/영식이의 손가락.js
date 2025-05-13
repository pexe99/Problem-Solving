const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const finger = +input[0];
let available = +input[1];

let result = 0;
if (finger === 1 || finger === 5) {
  result += Math.floor(available * 8);
  result += finger === 5 ? 4 : 0;
} else {
  result += Math.floor(Math.floor(available / 2) * 8);
  result += available % 2 ? 9 - finger : finger - 1;
}

console.log(result);
