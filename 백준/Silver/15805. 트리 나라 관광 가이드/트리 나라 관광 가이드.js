const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N], path] = input.map((line) => line.split(" ").map(Number));

const solution = (N, path) => {
  const parent = [];
  const visited = new Set();
  for (let i = 0; i < N; i++) {
    if (i === 0) parent[path[i]] = -1;
    else {
      if (!visited.has(path[i])) parent[path[i]] = path[i - 1];
    }
    visited.add(path[i]);
  }
  return `${parent.length}\n${parent.join(" ")}`;
};

console.log(solution(N, path));
