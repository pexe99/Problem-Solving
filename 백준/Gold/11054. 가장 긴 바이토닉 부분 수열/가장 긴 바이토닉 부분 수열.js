const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], sequence] = input.map((e) => e.split(" ").map(Number));

const solution = (N, sequence) => {
  const forward = new Array(N).fill(1);
  const backward = new Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i])
        forward[i] = Math.max(forward[i], forward[j] + 1);
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j > i; j--) {
      if (sequence[j] < sequence[i])
        backward[i] = Math.max(backward[i], backward[j] + 1);
    }
  }

  return forward.reduce(
    (res, cur, idx) => (res = Math.max(res, cur + backward[idx] - 1)),
    0
  );
};

console.log(solution(N, sequence));
