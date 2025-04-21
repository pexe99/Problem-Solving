const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();

const graph = Array.from({ length: N + 1 }, () => []);
input.splice(0, M).forEach((str) => {
  const [a, b, value] = str.split(" ").map(Number);
  graph[a].push([b, value]);
});
const [start, end] = input.shift().split(" ").map(Number);

const dijkstra = (from, to) => {
  const visited = new Array(N + 1).fill(false);
  const dist = new Array(N + 1).fill(Infinity);
  dist[from] = 0;

  for (let i = 1; i <= N; i++) {
    let minDist = Infinity;
    let current = -1;
    for (let j = 1; j <= N; j++) {
      if (!visited[j] && dist[j] < minDist) {
        minDist = dist[j];
        current = j;
      }
    }

    if (current === -1) break;
    visited[current] = true;
    for (const [next, cost] of graph[current]) {
      if (dist[next] > dist[current] + cost) {
        dist[next] = dist[current] + cost;
      }
    }
  }

  return dist[to];
};

console.log(dijkstra(start, end));
