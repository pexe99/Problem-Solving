const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [G, P, ...planes] = input.map(Number);

const solution = (G, P, planes) => {
  const root = Array.from({ length: G + 1 }, (_, index) => index);
  const find = (v) => (root[v] === v ? v : (root[v] = find(root[v])));

  for (let i = 0; i < P; i++) {
    const curRoot = find(planes[i]);
    if (curRoot === 0) return i;
    const nextRoot = find(curRoot - 1);
    root[curRoot] = nextRoot;
  }
  return P;
};

console.log(solution(G, P, planes));
