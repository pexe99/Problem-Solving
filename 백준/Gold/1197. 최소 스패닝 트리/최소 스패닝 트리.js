const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...edges] = input.map((string) => string.split(" ").map(Number));

const solution = (N, edges) => {
  edges = edges
    .map(([a, b, dist]) => (a < b ? [a, b, dist] : [b, a, dist]))
    .sort((a, b) => a[2] - b[2]);

  const root = Array.from({ length: N }, (_, i) => i);
  const find = (x) => (root[x] === x ? x : (root[x] = find(root[x])));

  return edges.reduce((acc, [a, b, dist]) => {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      root[rootB] = rootA;
      acc += dist;
    }

    return acc;
  }, 0);
};

console.log(solution(N, edges));
