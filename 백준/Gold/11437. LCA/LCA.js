const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

const N = +input.shift();
const edges = input.splice(0, N - 1).map((line) => line.split(" ").map(Number));
const M = +input.shift();
const nodes = input.map((line) => line.split(" ").map(Number));

const solution = (N, edges, M, nodes) => {
  const parent = new Array(N + 1).fill(0);
  const depth = new Array(N + 1).fill(null);
  const visited = new Array(N + 1).fill(false);
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  depth[1] = 0;
  visited[1] = true;

  let index = 0;
  const queue = [[1, 0]];
  while (index < queue.length) {
    const [curNode, curDepth] = queue[index++];
    graph[curNode].forEach((nextNode) => {
      if (!visited[nextNode]) {
        depth[nextNode] = curDepth + 1;
        parent[nextNode] = curNode;
        visited[nextNode] = true;
        queue.push([nextNode, depth[nextNode]]);
      }
    });
  }

  const result = [];
  nodes.forEach(([a, b]) => {
    [a, b] = depth[a] < depth[b] ? [a, b] : [b, a];
    while (depth[a] !== depth[b]) b = parent[b];
    while (a !== b) [a, b] = [parent[a], parent[b]];
    result.push(a);
  });

  return result.join("\n");
};

console.log(solution(N, edges, M, nodes));
