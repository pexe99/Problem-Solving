const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const sequence = input[1].split(" ").map(Number);

const solution = (N, sequence) => {
  const DP = new Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] > sequence[i]) DP[i] = Math.max(DP[i], DP[j] + 1);
    }
  }

  return Math.max(...DP);
};

console.log(solution(N, sequence));
