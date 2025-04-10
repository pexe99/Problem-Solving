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

const [N, M] = input[0].split(" ").map((e) => +e);

let [x, y] = [0, 0];
const graph = input.slice(1).map((str, i) => {
  const current = str.split(" ").map((e, j) => {
    if (e === "2") [x, y] = [i, j];
    return +e;
  });
  return current;
});

const distance = Array.from({ length: N }, (_, i) => {
  return Array.from({ length: M }, (_, j) => {
    if (graph[i][j] === 2 || graph[i][j] === 0) return 0;
    else return -1;
  });
});

let queue = [[x, y]],
  phase = 1;

while (queue.length) {
  let next = [];
  queue.forEach(([cx, cy]) => {
    DIRECTION.forEach(([dx, dy]) => {
      const [nx, ny] = [cx + dx, cy + dy];
      if (distance[nx] && distance[nx][ny] === -1) {
        next.push([nx, ny]);
        distance[nx][ny] = phase;
      }
    });
  });
  queue = [...next];
  phase++;
}

distance.forEach((arr) => console.log(arr.join(" ")));
