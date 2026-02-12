const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.join("").split("");

const MOVE = {
  L: -1,
  R: 1,
  U: -M,
  D: M,
};

const DFS = (index, mark, map) => {
  let curIndex = index + MOVE[map[index]];
  map[index] = mark;
  while (index !== curIndex) {
    if (typeof map[curIndex] === "number") return +(map[curIndex] === mark);
    const nextIndex = curIndex + MOVE[map[curIndex]];
    map[curIndex] = mark;
    curIndex = nextIndex;
  }
  return 1;
};

const solution = (N, M, map) => {
  let answer = 0;
  let mark = 1;
  for (let i = 0; i < N * M; i++) {
    if (typeof map[i] === "string") {
      answer += DFS(i, mark, map);
      mark++;
    }
  }
  return answer;
};

console.log(solution(N, M, map));
