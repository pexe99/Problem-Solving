const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, K], towers] = input.map((line) => line.split(" ").map(Number));

const solution = (N, K, towers) => {
  let result = Infinity;
  const visited = new Set();
  for (let idx = 0; idx < N; idx++) {
    const start = towers[idx] - idx * K;
    if (start < 1 || visited.has(start)) continue;
    visited.add(start);
    result = Math.min(
      result,
      Array.from({ length: N }, (_, i) => start + i * K).filter(
        (e, i) => e !== towers[i]
      ).length
    );
  }
  return result;
};

console.log(solution(N, K, towers));
