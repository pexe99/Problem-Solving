const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const DIRECTION = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const [N, M] = input[0].split(" ").map((e) => +e);
const map = input.slice(1).map((str) => str.split("").map((e) => +e));

const checkAvailable = (x, y) => {
  return 0 <= x && x < N && 0 <= y && y < M;
};

const BFS = () => {
  let front = 0;
  let queue = [[0, 0, 1, false]];
  let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => [Infinity, Infinity])
  );
  visited[0][0] = [1, Infinity];

  while (front < queue.length) {
    let [curX, curY, distance, isBreak] = queue[front++];
    for (let [distX, distY] of DIRECTION) {
      let [nextX, nextY] = [curX + distX, curY + distY];
      if (checkAvailable(nextX, nextY)) {
        let nextDistance = distance + 1;
        if (map[nextX][nextY] === 0) {
          if (nextDistance < visited[nextX][nextY][+isBreak]) {
            visited[nextX][nextY][+isBreak] = nextDistance;
            queue.push([nextX, nextY, nextDistance, isBreak]);
          }
        } else if (!isBreak) {
          if (nextDistance < visited[nextX][nextY][1]) {
            visited[nextX][nextY][1] = nextDistance;
            queue.push([nextX, nextY, nextDistance, true]);
          }
        }
      }
    }
  }

  const result = Math.min(...visited[N - 1][M - 1]);
  return result === Infinity ? -1 : result;
};

console.log(BFS());
