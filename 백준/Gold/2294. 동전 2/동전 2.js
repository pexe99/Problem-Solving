var fs = require("fs");

// boj 제출용 코드
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map((e) => +e);
let coins = input
  .slice(1)
  .map((e) => +e)
  .sort((a, b) => a - b);

let dp = Array.from({ length: N + 1 }, (_) =>
  Array.from({ length: K + 1 }, (_, i) => (i === 0 ? 0 : Infinity))
);

for (let i = 1; i <= N; i++) {
  let coin = coins[i - 1];
  for (let j = 1; j <= K; j++) {
    if (coin <= j) {
      dp[i][j] = Math.min(1 + dp[i][j - coin], dp[i - 1][j]);
    } else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N][K] === Infinity ? -1 : dp[N][K]);