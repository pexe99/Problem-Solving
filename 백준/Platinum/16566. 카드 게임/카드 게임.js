const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N, M, K], cards, opponent] = input.map((string) =>
  string.split(" ").map(Number)
);

const solution = (N, M, K, cards, opponent) => {
  cards.sort((a, b) => a - b);

  const parent = Array.from({ length: M + 1 }, (_, i) => i);

  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));

  const upperBound = (target) => {
    let [lo, hi] = [0, M];
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (cards[mid] <= target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  const result = [];
  for (const x of opponent) {
    const idx = find(upperBound(x));
    result.push(cards[idx]);
    parent[idx] = find(idx + 1);
  }

  return result.join("\n");
};

console.log(solution(N, M, K, cards, opponent));
