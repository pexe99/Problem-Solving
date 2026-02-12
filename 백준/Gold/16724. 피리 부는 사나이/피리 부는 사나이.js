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

const solution = (N, M, map) => {
  const MOVE = {
    L: -1,
    R: 1,
    U: -M,
    D: M,
  };

  const root = Array.from({ length: N * M }, (_, index) => index);

  const find = (v) => (root[v] = root[v] === v ? v : find(root[v]));

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) root[rootB] = rootA;
  };

  for (let i = 0; i < N * M; i++) {
    const [a, b] = [i, i + MOVE[map[i]]];
    union(b, a);
  }

  root.forEach((_, index) => find(index));

  return new Set(root).size;
};

console.log(solution(N, M, map));
