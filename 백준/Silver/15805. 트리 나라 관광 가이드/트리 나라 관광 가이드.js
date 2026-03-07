const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N], path] = input.map((line) => line.split(" ").map(Number));

const solution = (N, path) => {
  const parent = new Array(Math.max(...path) + 1).fill(null);
  parent[path[0]] = -1;
  for (let i = 1; i < N; i++)
    parent[path[i]] === null && (parent[path[i]] = path[i - 1]);
  return `${parent.length}\n${parent.join(" ")}`;
};

console.log(solution(N, path));
