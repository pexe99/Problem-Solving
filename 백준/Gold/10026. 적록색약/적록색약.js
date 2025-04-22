const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const N = +input[0];
const normal = input.slice(1).map((str) => str.trim().split(""));
const colorBlind = input.slice(1).map((str) =>
  str
    .trim()
    .split("")
    .map((c) => (c === "G" ? "R" : c))
);

const BFS = (x, y, board) => {
  const queue = [[x, y]];
  const current = board[x][y];
  let index = 0;
  while (index < queue.length) {
    const [cx, cy] = queue[index++];
    DIRECTION.forEach(([dx, dy]) => {
      const [nx, ny] = [cx + dx, cy + dy];
      if (board[nx] && board[nx][ny] === current) {
        board[nx][ny] = false;
        queue.push([nx, ny]);
      }
    });
  }
};

let nResult = 0,
  bResult = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (normal[i][j]) {
      BFS(i, j, normal);
      nResult++;
    }
    if (colorBlind[i][j]) {
      BFS(i, j, colorBlind);
      bResult++;
    }
  }
}

console.log(`${nResult} ${bResult}`);
