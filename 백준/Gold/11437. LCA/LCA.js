const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

const N = +input.shift();
const edges = input.splice(0, N - 1).map((line) => line.split(" ").map(Number));
const M = +input.shift();
const nodes = input.map((line) => line.split(" ").map(Number));

const query = (LOG, parent, depth, a, b) => {
  if (depth[b] < depth[a]) [a, b] = [b, a];

  for (let k = LOG; k >= 0; k--)
    if ((depth[b] - depth[a]) & (1 << k)) b = parent[k][b];

  if (a === b) return a;

  for (let k = LOG; k >= 0; k--) {
    if (parent[k][a] !== parent[k][b]) {
      a = parent[k][a];
      b = parent[k][b];
    }
  }

  return parent[0][a];
};

const solution = (N, edges, M, nodes) => {
  const depth = new Int32Array(N + 1).fill(-1);
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const LOG = Math.ceil(Math.log2(N));
  const parent = Array.from({ length: LOG + 1 }, () => new Int32Array(N + 1));

  depth[1] = 0;
  let index = 0;
  const queue = [[1, 0]];
  while (index < queue.length) {
    const [curNode, curDepth] = queue[index++];
    graph[curNode].forEach((nextNode) => {
      if (depth[nextNode] === -1) {
        depth[nextNode] = curDepth + 1;
        parent[0][nextNode] = curNode;
        queue.push([nextNode, depth[nextNode]]);
      }
    });
  }

  for (let i = 1; i <= LOG; i++) {
    for (let j = 1; j <= N; j++) parent[i][j] = parent[i - 1][parent[i - 1][j]];
  }

  const result = [];
  nodes.forEach(([a, b]) => result.push(query(LOG, parent, depth, a, b)));

  return result.join("\n");
};

console.log(solution(N, edges, M, nodes));
