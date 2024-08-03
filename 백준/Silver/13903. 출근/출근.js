const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [R, C] = input[0].split(" ").map((e) => +e);
const road = input.slice(1, R + 1).map((str) => str.split(" ").map((e) => +e));
const [[N], ...DIRECTION] = input
  .slice(R + 1)
  .map((str) => str.split(" ").map((e) => +e));

const checkAvailable = (x, y, mx, my) => {
  return 0 <= x && x < mx && 0 <= y && y < my;
};
const visited = Array.from({ length: R }, () =>
  Array.from({ length: C }, () => false)
);

const BFS = () => {
  let queue = [];
  for (let i = 0; i < C; i++) {
    if (road[0][i]) {
      queue.push([0, i, 0]);
      visited[0][i] = true;
    }
  }
  while (queue.length) {
    let temp = [];
    for (let current of queue) {
      let [curX, curY, curDist] = current;
      if (curX === R - 1) return curDist;
      DIRECTION.forEach(([distX, distY]) => {
        let [nextX, nextY] = [curX + distX, curY + distY];
        if (
          checkAvailable(nextX, nextY, R, C) &&
          road[nextX][nextY] &&
          !visited[nextX][nextY]
        ) {
          visited[nextX][nextY] = true;
          temp.push([nextX, nextY, curDist + 1]);
        }
      });
    }
    queue = temp;
  }
  return -1;
};

console.log(BFS());
