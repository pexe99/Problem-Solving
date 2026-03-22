const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

const N = +input.shift();
const edges = input.splice(0, N - 1).map((line) => line.split(" ").map(Number));
const M = +input.shift();
const cities = input.map((line) => line.split(" ").map(Number));

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
  const distance = new Array(N + 1).fill(0);
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b, dist]) => {
    graph[a].push([b, dist]);
    graph[b].push([a, dist]);
  });

  const LOG = Math.ceil(Math.log2(N));
  const parent = Array.from({ length: N + 1 }, () =>
    Array.from({ length: LOG + 1 }, () => 0)
  );

  depth[1] = 0;
  let index = 0;
  const queue = [[1, 0, 0]];
  while (index < queue.length) {
    const [curNode, curDepth, curDist] = queue[index++];
    graph[curNode].forEach(([nextNode, nextDist]) => {
      if (depth[nextNode] === null) {
        depth[nextNode] = curDepth + 1;
        parent[nextNode][0] = curNode;
        distance[nextNode] = curDist + nextDist;
        queue.push([nextNode, depth[nextNode], distance[nextNode]]);
      }
    });
  }

  for (let k = 1; k <= LOG; k++) {
    for (let node = 1; node <= N; node++)
      parent[node][k] = parent[parent[node][k - 1]][k - 1];
  }

  const result = [];
  cities.forEach(([from, to]) => {
    const LCA = query(LOG, N, depth, parent, from, to);
    result.push(distance[from] + distance[to] - 2 * distance[LCA]);
  });

  return result.join("\n");
};

console.log(solution(N, edges, M, cities));
