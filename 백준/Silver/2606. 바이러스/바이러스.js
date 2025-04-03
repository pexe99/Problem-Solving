const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const computer = +input[0];
const graph = [];
input.slice(2).forEach((str) => {
  const [a, b] = str.split(" ").map((e) => +e);
  graph[a] = [...(graph[a] || []), b];
  graph[b] = [...(graph[b] || []), a];
});

const visited = new Array(computer + 1).fill(false);

const DFS = (current) => {
  visited[current] = true;
  if (graph[current]) {
    graph[current].forEach((next) => {
      if (!visited[next]) DFS(next);
    });
  }
};

DFS(1);

console.log(visited.filter((e) => e).length - 1);
