const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((e) => e.split(" ").map(Number));

const graph = {};
edges.forEach(([from, to, cost]) => {
  graph[from - 1] = [...(graph[from - 1] || []), { to: to - 1, cost: cost }];
});

const distance = Array.from({ length: N }, () => Infinity);
distance[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let from = 0; from < N; from++) {
    for (let { to, cost } of graph[from] || []) {
      if (i === N) {
        if (distance[to] > distance[from] + cost) {
          console.log(-1);
          return;
        }
      } else {
        distance[to] = Math.min(distance[to], distance[from] + cost);
      }
    }
  }
}

distance.slice(1).forEach((e) => console.log(e === Infinity ? -1 : e));
