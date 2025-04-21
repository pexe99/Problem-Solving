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

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((str) =>
  str
    .trim()
    .split("")
    .map((char) => char.charCodeAt() - "A".charCodeAt())
);

const DFS = (x, y, bit) => {
  let max = 0;
  for (const [dx, dy] of DIRECTION) {
    const [nx, ny] = [x + dx, y + dy];
    if (
      board[nx] &&
      board[nx][ny] !== undefined &&
      (bit & (1 << board[nx][ny])) === 0
    ) {
      max = Math.max(max, DFS(nx, ny, bit | (1 << board[nx][ny])));
    }
  }
  return max + 1;
};

const startChar = board[0][0];
const startBit = 1 << startChar;
console.log(DFS(0, 0, startBit));
