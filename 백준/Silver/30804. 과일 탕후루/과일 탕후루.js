const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const fruits = input[1].split(" ").map(Number);

let result = 0;
let [start, end] = [0, 0];
const counter = {};

while (end < N) {
  const next = fruits[end++];
  counter[next] = (counter[next] || 0) + 1;
  while (2 < Object.keys(counter).length) {
    counter[fruits[start]]--;
    if (counter[fruits[start]] === 0) delete counter[fruits[start]];
    start++;
  }
  result = Math.max(result, end - start);
}

console.log(result);
