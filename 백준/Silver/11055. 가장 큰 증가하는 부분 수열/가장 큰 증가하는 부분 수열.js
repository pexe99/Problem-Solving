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
  const DP = [...sequence];

  for (let i = 1; i < N; i++) {
    const current = DP[i];
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i]) DP[i] = Math.max(DP[i], current + DP[j]);
    }
  }

  return Math.max(...DP);
};

console.log(solution(N, sequence));
