const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((str) => str.split(""));
const DP = Array.from({ length: N }, () => Array(M).fill(-1));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const checkAvailable = (x, y) => {
  return 0 <= x && x < N && 0 <= y && y < M && board[x][y] !== "H";
};

const DFS = (curX, curY) => {
  if (!checkAvailable(curX, curY)) return 0;
  if (visited[curX][curY]) return Infinity; // 무한 루프 탐지
  if (DP[curX][curY] !== -1) return DP[curX][curY];

  visited[curX][curY] = true;
  let maxMove = 0;

  for (const [dirX, dirY] of DIRECTION) {
    const nextX = curX + dirX * +board[curX][curY];
    const nextY = curY + dirY * +board[curX][curY];

    const move = DFS(nextX, nextY);
    if (move === Infinity) {
      return Infinity; // 무한 루프 발견 시 바로 리턴
    }

    maxMove = Math.max(maxMove, move);
  }

  visited[curX][curY] = false;
  return (DP[curX][curY] = maxMove + 1);
};

const result = DFS(0, 0);
console.log(result === Infinity ? -1 : result);
