const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, M], ...invest] = input.map((line) => line.split(" ").map(Number));

const solution = (N, M, invest) => {
  const dp = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
  const track = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
  const investInfo = Array.from({ length: M + 1 }, () =>
    new Array(N + 1).fill(0)
  );
  invest.forEach(([amount, ...info]) =>
    info.forEach((cur, idx) => {
      if (idx + 1 > M) return;
      investInfo[idx + 1][amount] = cur;
    })
  );

  for (let company = 1; company <= M; company++) {
    for (let amount = 1; amount <= N; amount++) {
      for (let k = 0; k <= amount; k++) {
        const value = dp[company - 1][amount - k] + investInfo[company][k];
        if (dp[company][amount] < value) {
          dp[company][amount] = value;
          track[company][amount] = k;
        }
      }
    }
  }

  const investResult = [];
  let remain = N;
  for (let company = M; company >= 1; company--) {
    investResult.push(track[company][remain]);
    remain -= track[company][remain] || 0;
  }

  return `${dp[M][N]}\n${investResult.reverse().join(" ")}`;
};

console.log(solution(N, M, invest));
