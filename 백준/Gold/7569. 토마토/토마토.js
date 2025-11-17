const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

/*
[input]
M: 상자의 가로 칸 수
N: 상자의 세로 칸 수
H: 쌓아올린 상자의 개수
이후, N개의 줄마다 각 칸의 토마토 배치가 주어짐
0: 익지 않은 토마토
1: 익은 토마토
-1: 토마토가 없는 칸

[output]
모든 토마토가 익을 때까지 소요되는 일의 최소값
모든 토마토가 익어있는 상태라면 0
토마토가 모두 익지 못하는 상황이라면 -1

[category]
BFS
*/

const DIRECTION = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];
const tomato = {
  total: 0,
  riped: 0,
};
const [M, N, H] = input
  .shift()
  .split(" ")
  .map((e) => +e);
const box = []; // H, N, M 순으로 각 토마토에 대한 정보를 담고 있는 3차원 array

const isAvailable = (z, x, y) => {
  return (
    0 <= x && x < N && 0 <= y && y < M && 0 <= z && z < H && box[z][x][y] === 0
  );
};

let queue = [],
  date = 0;
while (input.length) {
  box.push(
    input.splice(0, N).map((row, x) => {
      return row.split(" ").map((e, y) => {
        if (+e !== -1) {
          tomato.total++;
          if (+e === 1) {
            tomato.riped++;
            queue.push([box.length, x, y]);
          }
        }
        return +e;
      });
    })
  );
}

if (tomato.total === tomato.riped) {
  console.log(0);
  return;
}

while (queue.length) {
  if (tomato.total === tomato.riped) {
    console.log(date);
    return;
  }
  const nextQueue = [];
  queue.forEach(([z, x, y]) => {
    DIRECTION.forEach(([dz, dx, dy]) => {
      const [nz, nx, ny] = [z + dz, x + dx, y + dy];
      if (isAvailable(nz, nx, ny)) {
        box[nz][nx][ny] = 1;
        tomato.riped++;
        nextQueue.push([nz, nx, ny]);
      }
    });
  });
  queue = nextQueue;
  date++;
}

console.log(-1);
