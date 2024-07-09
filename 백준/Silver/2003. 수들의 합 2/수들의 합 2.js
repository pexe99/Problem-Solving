const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [[N, M], array] = input.map((str) => str.split(" ").map((e) => +e));
let [start, end, sum, result] = [0, -1, 0, 0];

while (end < N) {
  sum += array[++end];
  if (sum === M) result++;
  while (sum > M) {
    sum -= array[start++];
    if (sum === M) result++;
  }
}

console.log(result);
