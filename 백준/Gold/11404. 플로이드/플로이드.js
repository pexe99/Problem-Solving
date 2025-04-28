const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const n = +input.splice(0, 1);
const m = +input.splice(0, 1);
const graph = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity))
);
input.forEach((str) => {
  const [start, end, cost] = str.split(" ").map(Number);
  graph[start - 1][end - 1] = Math.min(graph[start - 1][end - 1], cost);
});

for (let k = 0; k < n; k++) {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

graph.forEach((row) => {
  console.log(row.map((e) => (e === Infinity ? 0 : e)).join(" "));
});
