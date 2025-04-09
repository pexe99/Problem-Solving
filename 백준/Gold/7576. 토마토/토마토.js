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

const [M, N] = input[0].split(" ").map((e) => +e);
let [ripe, unripe] = [0, 0];
let queue = [];
const graph = input.slice(1).map((str, i) =>
  str.split(" ").map((e, j) => {
    if (+e === 1) {
      ripe++;
      queue.push([i, j]);
    } else if (+e === 0) unripe++;
    return +e + 1;
  })
);

if (unripe === 0) console.log(0);
else {
  let date = 0;
  while (queue.length) {
    let next = [];
    queue.forEach(([i, j]) => {
      DIRECTION.forEach(([dx, dy]) => {
        const [nx, ny] = [i + dx, j + dy];
        if (graph[nx] && graph[nx][ny] && graph[nx][ny] === 1) {
          graph[nx][ny] = 2;
          next.push([nx, ny]);
          unripe--;
        }
      });
    });
    queue = [...next];
    date++;
  }
  console.log(unripe === 0 ? date - 1 : -1);
}
