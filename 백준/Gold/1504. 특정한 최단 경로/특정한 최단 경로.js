const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1, M + 1).map((e) => e.split(" ").map(Number));
const [v1, v2] = input[input.length - 1].split(" ").map(Number);

const dijikstra = (start, graph) => {
  const distance = new Array(graph.length).fill(Infinity);
  const queue = [start];
  distance[start] = 0;
  for (let i = 0; i < queue.length; i++) {
    graph[queue[i]].forEach(([next, weight]) => {
      if (distance[queue[i]] + weight < distance[next]) {
        queue.push(next);
        distance[next] = distance[queue[i]] + weight;
      }
    });
  }
  return distance;
};

const solution = (N, M, edges, v1, v2) => {
  const graph = Array.from({ length: N }, () => []);
  edges.forEach(([node1, node2, weight]) => {
    graph[node1 - 1].push([node2 - 1, weight]);
    graph[node2 - 1].push([node1 - 1, weight]);
  });

  const fromStart = dijikstra(0, graph);
  const fromV1 = dijikstra(v1 - 1, graph);
  const fromV2 = dijikstra(v2 - 1, graph);

  const result = Math.min(
    fromStart[v1 - 1] + fromV1[v2 - 1] + fromV2[N - 1],
    fromStart[v2 - 1] + fromV2[v1 - 1] + fromV1[N - 1]
  );
  return result === Infinity ? -1 : result;
};

console.log(solution(N, M, edges, v1, v2));
