const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);
const array = input.slice(1).map((str) => str.split("").map((e) => +e));

let maxNumber = -1;

function isSquare(n) {
  if (n < 0) return false;
  const sqrt = Math.floor(Math.sqrt(n));
  return sqrt * sqrt === n;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let dx = -N; dx <= N; dx++) {
      for (let dy = -M; dy <= M; dy++) {
        if (dx === 0 && dy === 0) continue;
        let curX = i, curY = j;
        let result = "";
        while (0 <= curX && curX < N && 0 <= curY && curY < M) {
          result += array[curX][curY];
          const num = parseInt(result, 10);
          if (isSquare(num)) {
            maxNumber = Math.max(maxNumber, num);
          }
          curX += dx;
          curY += dy;
        }
      }
    }
  }
}

console.log(maxNumber);
