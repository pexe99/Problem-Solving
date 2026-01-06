const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, R, Q] = input.shift().split(" ").map(Number);
const edges = input.splice(0, N - 1).map((e) => e.split(" ").map(Number));
const queries = input.map(Number);

const getSubtreeSize = (R, tree) => {
  const result = new Array(tree.length).fill(null);
  const queue = [[null, R]];

  while (queue.length) {
    const [parent, current] = queue[queue.length - 1];
    if (result[current] === null) {
      result[current] = 1;
      tree[current].forEach((next) => {
        if (result[next] === null) queue.push([current, next]);
      });
    } else {
      result[parent] += result[current];
      queue.pop();
    }
  }

  return result;
};

const solution = (N, R, Q, edges, queries) => {
  const tree = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b]) => {
    tree[a].push(b);
    tree[b].push(a);
  });

  const subtreeSize = getSubtreeSize(R, tree);
  return queries.map((q) => subtreeSize[q]).join("\n");
};

console.log(solution(N, R, Q, edges, queries));
