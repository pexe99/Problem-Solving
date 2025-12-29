const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...planet] = input.map((string) => string.split(" ").map(Number));

const solution = (N, planet) => {
  const edges = [];
  const axisEdges = Array.from({ length: 3 }, (_, axis) =>
    Array.from({ length: N }, (_, i) => i).sort(
      (a, b) => planet[a][axis] - planet[b][axis]
    )
  );

  axisEdges.forEach((array, index) => {
    for (let i = 1; i < N; i++) {
      const [prev, cur] = [array[i - 1], array[i]];
      const dist = Math.abs(planet[prev][index] - planet[cur][index]);
      if (prev < cur) edges.push([prev, cur, dist]);
      else edges.push([cur, prev, dist]);
    }
  });
  edges.sort((a, b) => a[2] - b[2]);

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

console.log(solution(N, planet));
