const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

const N = +input.shift();
const edges = input.splice(0, N - 1).map((line) => line.split(" ").map(Number));
const M = +input.shift();
const cities = input.map(Number);

const query = (LOG, N, depth, parent, a, b) => {
  if (depth[b] < depth[a]) [a, b] = [b, a];
  for (let k = LOG; k >= 0; k--)
    if ((depth[b] - depth[a]) & (1 << k)) b = parent[b][k];

  if (a === b) return a;

  for (let k = LOG; k >= 0; k--) {
    if (parent[a][k] !== parent[b][k]) {
      a = parent[a][k];
      b = parent[b][k];
    }
  }

  return parent[a][0];
};

const solution = (N, edges, M, cities) => {
  const depth = new Array(N + 1).fill(null);
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const LOG = Math.ceil(Math.log2(N));
  const parent = Array.from({ length: N + 1 }, () =>
    new Array(LOG + 1).fill(0)
  );

  depth[1] = 0;
  let index = 0;
  const queue = [[1, 0]];
  while (index < queue.length) {
    const [curNode, curDepth] = queue[index++];
    graph[curNode].forEach((nextNode) => {
      if (depth[nextNode] === null) {
        depth[nextNode] = curDepth + 1;
        parent[nextNode][0] = curNode;
        queue.push([nextNode, depth[nextNode]]);
      }
    });
  }

  for (let k = 1; k <= LOG; k++) {
    for (let node = 1; node <= N; node++)
      parent[node][k] = parent[parent[node][k - 1]][k - 1];
  }

  let result = depth[cities[0]];
  for (let i = 0; i < M - 1; i++) {
    const [from, to] = [cities[i], cities[i + 1]];
    const LCA = query(LOG, N, depth, parent, from, to);
    result +=
      Math.abs(depth[from] - depth[LCA]) + Math.abs(depth[LCA] - depth[to]);
  }

  return result;
};

console.log(solution(N, edges, M, cities));
