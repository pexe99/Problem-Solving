const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...graph] = input.map((string) => string.split(" ").map(Number));

const solution = (N, graph) => {
  const dp = Array.from({ length: N }, () => new Array(1 << N).fill(null));

  const dfs = (start, visited) => {
    if (visited === (1 << N) - 1) {
      dp[start][visited] = graph[start][0] || Infinity;
      return dp[start][visited];
    }

    if (dp[start][visited] !== null) return dp[start][visited];

    dp[start][visited] = Infinity;
    for (let i = 1; i < N; i++) {
      if (visited & (1 << i) || graph[start][i] === 0) continue;
      dp[start][visited] = Math.min(
        dp[start][visited],
        dfs(i, visited | (1 << i)) + graph[start][i]
      );
    }

    return dp[start][visited];
  };

  return dfs(0, 1);
};

console.log(solution(N, graph));
