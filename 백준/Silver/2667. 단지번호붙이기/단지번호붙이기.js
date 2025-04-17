const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const N = +input[0];
const graph = input.slice(1).map((str) => str.split("").map(Number));

const result = [];

const BFS = (x, y) => {
  graph[x][y] = 0;
  const queue = [[x, y]];
  let index = 0;
  while (index < queue.length) {
    const [cx, cy] = queue[index++];
    DIRECTION.forEach(([dx, dy]) => {
      const [nx, ny] = [cx + dx, cy + dy];
      if (graph[nx] && graph[nx][ny]) {
        graph[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    });
  }
  return index;
};

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (graph[x][y]) result.push(BFS(x, y));
  }
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((cur) => console.log(cur));
