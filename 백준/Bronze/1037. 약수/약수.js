const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const len = +input[0];
const divisor = input[1]
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);
if (len % 2 === 0) console.log(divisor[0] * divisor[len - 1]);
else console.log(Math.pow(divisor[Math.floor(len / 2)], 2));
