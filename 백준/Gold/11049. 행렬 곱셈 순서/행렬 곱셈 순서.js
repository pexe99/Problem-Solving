const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...matrix] = input.map((e) => e.split(" ").map(Number));

const solution = (N, matrix) => {
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Infinity)
  );

  for (let i = 0; i < N - 1; i++) {
    dp[i][i + 1] = matrix[i][0] * matrix[i][1] * matrix[i + 1][1];
  }

  for (let dist = 2; dist < N; dist++) {
    for (let i = 0; i < N - dist; i++) {
      for (let j = 0; j < dist; j++) {
        const left = dp[i][i + j] === Infinity ? 0 : dp[i][i + j];
        const right =
          dp[i + j + 1][i + dist] === Infinity ? 0 : dp[i + j + 1][i + dist];
        dp[i][i + dist] = Math.min(
          dp[i][i + dist],
          left + right + matrix[i][0] * matrix[i + j][1] * matrix[i + dist][1]
        );
      }
    }
  }

  return dp[0][N - 1];
};

console.log(solution(N, matrix));
