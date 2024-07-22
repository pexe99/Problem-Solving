const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, ...graph] = input.map((str) => str.split(" ").map((e) => +e));
const edges = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => true)
);

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i === k || j === k) continue;
      if (graph[i][j] > graph[i][k] + graph[k][j]) {
        console.log(-1);
        return;
      }
      if (graph[i][j] === graph[i][k] + graph[k][j])
        edges[i][j] = edges[j][i] = false;
    }
  }
}

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) result += edges[i][j] ? graph[i][j] : 0;
}
console.log(result);
