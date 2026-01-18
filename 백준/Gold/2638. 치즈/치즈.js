const fs = require("fs");
const input = fs
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

const [[N, M], ...map] = input.map((e) => e.split(" ").map(Number));

const isAvailable = (x, y, N, M) => {
  return 0 <= x && x < N && 0 <= y && y < M;
};

const isMelted = (N, M, map) => {
  let counter = 0;
  const queue = [[0, 0]];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );
  visited[0][0] = 1;

  for (let i = 0; i < queue.length; i++) {
    const [x, y] = queue[i];
    DIRECTION.forEach(([dx, dy]) => {
      const [nx, ny] = [x + dx, y + dy];
      if (isAvailable(nx, ny, N, M)) {
        if (map[nx][ny] === 0 && visited[nx][ny] === 0) {
          visited[nx][ny]++;
          queue.push([nx, ny]);
        } else if (map[nx][ny] === 1) {
          visited[nx][ny]++;
          if (visited[nx][ny] === 2) {
            map[nx][ny] = 0;
            counter++;
          }
        }
      }
    });
  }

  return counter > 0;
};

const solution = (N, M, map) => {
  let result = 0;
  while (true) {
    if (!isMelted(N, M, map)) break;
    result++;
  }
  return result;
};

console.log(solution(N, M, map));
