const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const items = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity))
);

input.map((str) => {
  const [a, b, n] = str.split(" ").map(Number);
  graph[a - 1][b - 1] = graph[b - 1][a - 1] = n;
});

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

console.log(
  graph.reduce((maximum, current) => {
    const result = current.reduce(
      (sum, distance, index) => sum + (distance <= m ? items[index] : 0),
      0
    );
    return Math.max(result, maximum);
  }, 0)
);
