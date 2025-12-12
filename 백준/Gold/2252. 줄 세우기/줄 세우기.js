const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N, M], ...edges] = input.map((str) => str.split(" ").map(Number));

const solution = (N, M, edges) => {
  const graph = Array.from({ length: N + 1 }, () => ({
    in: new Set(),
    out: new Set(),
  }));
  edges.forEach(([from, to]) => {
    graph[from].out.add(to);
    graph[to].in.add(from);
  });

  const queue = [];
  for (let i = 1; i <= N; i++) {
    if (graph[i].in.size === 0) queue.push(i);
  }

  let index = 0;
  while (index < queue.length) {
    const curNode = queue[index++];
    graph[curNode].out.forEach((next) => {
      graph[next].in.delete(curNode);
      if (graph[next].in.size === 0) queue.push(next);
    });
  }

  return queue.join(" ");
};

console.log(solution(N, M, edges));
