const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

/*
[category]
LCA, Tree, Sparse Table

[input]
N: 도시의 개수
roads: A, B 도시를 잇는 길이 C인 도로 N-1개
K: 도시 쌍의 개수
cities: D, E 도시 쌍

[output]
각 D, E 도시 쌍마다 두 도시 사이 경로에서
가장 짧은 도로와 가장 긴 도로의 길이를
공백으로 구분해 각 줄마다 출력

[solution]
두 도시를 잇는 경로는 결국 D > LCA > E라 할 수 있다.
따라서 
*/

const N = +input.shift();
const roads = input.splice(0, N - 1).map((line) => line.split(" ").map(Number));
const K = +input.shift();
const cities = input.map((line) => line.split(" ").map(Number));

const query = (LOG, depth, parent, minRoad, maxRoad, a, b) => {
  let min = Infinity;
  let max = 0;

  if (depth[b] < depth[a]) [a, b] = [b, a];
  for (let k = LOG; k >= 0; k--) {
    if ((depth[b] - depth[a]) & (1 << k)) {
      min = Math.min(min, minRoad[b][k]);
      max = Math.max(max, maxRoad[b][k]);
      b = parent[b][k];
    }
  }

  if (a === b) return [min, max];

  for (let k = LOG; k >= 0; k--) {
    if (parent[a][k] !== parent[b][k]) {
      min = Math.min(min, minRoad[a][k], minRoad[b][k]);
      max = Math.max(max, maxRoad[a][k], maxRoad[b][k]);
      a = parent[a][k];
      b = parent[b][k];
    }
  }

  min = Math.min(min, minRoad[a][0], minRoad[b][0]);
  max = Math.max(max, maxRoad[a][0], maxRoad[b][0]);
  return [min, max];
};

const solution = (N, roads, K, cities) => {
  const depth = new Array(N + 1).fill(null);
  const graph = Array.from({ length: N + 1 }, () => []);
  roads.forEach(([A, B, distance]) => {
    graph[A].push([B, distance]);
    graph[B].push([A, distance]);
  });

  const LOG = Math.ceil(Math.log2(N + 1));
  const parent = Array.from({ length: N + 1 }, () =>
    new Array(LOG + 1).fill(0)
  );
  const minRoad = Array.from({ length: N + 1 }, () =>
    new Array(LOG + 1).fill(Infinity)
  );
  const maxRoad = Array.from({ length: N + 1 }, () =>
    new Array(LOG + 1).fill(0)
  );

  depth[1] = 0;
  let index = 0;
  const queue = [[1, 0]];
  while (index < queue.length) {
    const [curNode, curDepth] = queue[index++];
    graph[curNode].forEach(([nextNode, nextDist]) => {
      if (depth[nextNode] === null) {
        depth[nextNode] = curDepth + 1;
        parent[nextNode][0] = curNode;
        minRoad[nextNode][0] = nextDist;
        maxRoad[nextNode][0] = nextDist;
        queue.push([nextNode, depth[nextNode]]);
      }
    });
  }

  for (let k = 1; k <= LOG; k++) {
    for (let node = 1; node <= N; node++) {
      parent[node][k] = parent[parent[node][k - 1]][k - 1];
      minRoad[node][k] = Math.min(
        minRoad[node][k - 1],
        minRoad[parent[node][k - 1]][k - 1]
      );
      maxRoad[node][k] = Math.max(
        maxRoad[node][k - 1],
        maxRoad[parent[node][k - 1]][k - 1]
      );
    }
  }

  const result = [];
  cities.forEach(([D, E]) =>
    result.push(query(LOG, depth, parent, minRoad, maxRoad, D, E))
  );
  return result.map((e) => e.join(" ")).join("\n");
};

console.log(solution(N, roads, K, cities));
