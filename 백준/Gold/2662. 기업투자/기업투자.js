const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, M], ...invest] = input.map((line) => line.split(" ").map(Number));

const solution = (N, M, invest) => {
  const investInfo = {};
  invest.forEach(([amount, ...info]) => (investInfo[amount] = info));
  const dp = Array.from({ length: M }, () =>
    Array.from({ length: N + 1 }, () => ({
      total: 0,
      amount: new Array(M).fill(0),
    }))
  );

  for (let company = 0; company < M; company++) {
    for (let amount = 1; amount <= N; amount++) {
      if (company === 0) {
        dp[company][amount].total = investInfo[amount][company];
        dp[company][amount].amount[company] = amount;
      } else {
        for (let k = 0; k <= amount; k++) {
          const profit = k === 0 ? 0 : investInfo[k][company];
          const current = dp[company - 1][amount - k].total + profit;
          if (dp[company][amount].total < current) {
            dp[company][amount].total = current;
            dp[company][amount].amount = [
              ...dp[company - 1][amount - k].amount,
            ];
            dp[company][amount].amount[company] += k;
          }
        }
      }
    }
  }

  return `${dp[M - 1][N].total}\n${dp[M - 1][N].amount.join(" ")}`;
};

console.log(solution(N, M, invest));
