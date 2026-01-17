const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...map] = input.map((e) => e.split(" ").map(Number));

const solution = (N, map) => {
  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => [0, 0, 0])
  );

  dp[1][2][0] = 1;
  for (let i = 1; i <= N; i++) {
    for (let j = 3; j <= N; j++) {
      if (map[i - 1][j - 1] === 0) {
        dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][1];
        dp[i][j][2] = dp[i - 1][j][1] + dp[i - 1][j][2];
        if (
          i >= 2 &&
          j >= 2 &&
          map[i - 2][j - 1] === 0 &&
          map[i - 1][j - 2] === 0
        ) {
          dp[i][j][1] =
            dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
        }
      }
    }
  }

  return dp[N][N].reduce((acc, cur) => acc + cur);
};

console.log(solution(N, map));
