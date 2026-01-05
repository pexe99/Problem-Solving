const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[V, E], ...edges] = input.map((e) => e.split(" ").map(Number));

const solution = (V, E, edges) => {
  edges = edges
    .map(([a, b, weight]) => (a < b ? [a, b, weight] : [b, a, weight]))
    .sort((a, b) => a[2] - b[2]);

  const root = Array.from({ length: V + 1 }, (_, i) => i);
  const find = (x) => (root[x] === x ? x : (root[x] = find(root[x])));

  return edges.reduce((res, [a, b, weight]) => {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      root[rootB] = rootA;
      res += weight;
    }

    return res;
  }, 0);
};

console.log(solution(V, E, edges));
