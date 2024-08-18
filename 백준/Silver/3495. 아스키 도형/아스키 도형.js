const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [h, w] = input[0].split(" ").map((e) => +e);
const memo = input
  .slice(1)
  .map((str) =>
    str
      .split("")
      .filter((e) => e !== "\r")
      .map((e) => +(e !== "."))
      .join("")
  )
  .join("")
  .split("");

let result = [0, 0];
memo.forEach((e) => {
  if (+e === 1) result[1]++;
  else if (result[1] % 2 === 1) result[0]++;
});
console.log(result[0] + result[1] / 2);
