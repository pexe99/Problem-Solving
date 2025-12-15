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
  const inDegree = Array.from({ length: N + 1 }, (_, idx) => (idx ? 0 : null));
  const graph = Array.from({ length: N + 1 }, (_, idx) =>
    idx ? new Array() : null
  );
  edges.forEach(([from, to]) => {
    graph[from].push(to);
    inDegree[to]++;
  });

  const queue = [];
  inDegree.forEach((degree, idx) => degree === 0 && queue.push(idx));

  let index = 0;
  while (index < queue.length) {
    const curNode = queue[index++];
    graph[curNode].forEach((next) => {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    });
  }

  return queue.join(" ");
};

console.log(solution(N, M, edges));
