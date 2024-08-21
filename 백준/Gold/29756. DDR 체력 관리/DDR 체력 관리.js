const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((e) => +e);
const scores = input[1].split(" ").map(Number);
const health = input[2].split(" ").map(Number);

const DP = Array.from({ length: N + 1 }, () =>
  Array.from({ length: 101 }, () => -1)
);
DP[0][100] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= 100; j++) {
    if (DP[i - 1][j] !== -1) {
      let nextHealth = Math.min(j + K, 100);
      DP[i][nextHealth] = Math.max(DP[i][nextHealth], DP[i - 1][j]);
      if (nextHealth >= health[i - 1]) {
        DP[i][nextHealth - health[i - 1]] = Math.max(
          DP[i][nextHealth - health[i - 1]],
          DP[i - 1][j] + scores[i - 1]
        );
      }
    }
  }
}

console.log(Math.max(...DP[N]));
