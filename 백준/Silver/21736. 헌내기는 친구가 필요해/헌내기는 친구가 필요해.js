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

let [px, py] = [0, 0];
const graph = input.slice(1).map((str, i) => {
  const current = str.split("");
  current.forEach((e, j) => {
    if (e === "I") [px, py] = [i, j];
  });
  return current;
});

let result = 0,
  index = 0;
const queue = [[px, py]];
while (index < queue.length) {
  const [cx, cy] = queue[index++];
  DIRECTION.forEach(([dx, dy]) => {
    const [nx, ny] = [cx + dx, cy + dy];
    if (graph[nx] && graph[nx][ny] && graph[nx][ny] !== "X") {
      if (graph[nx][ny] === "P") result++;
      graph[nx][ny] = "X";
      queue.push([nx, ny]);
    }
  });
}

console.log(result || "TT");
