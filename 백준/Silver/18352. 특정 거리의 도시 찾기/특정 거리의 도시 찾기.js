const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, M, K, X], ...edges] = input.map((line) =>
  line.split(" ").map(Number)
);

const solution = (N, M, K, X, edges) => {
  const queue = [X];
  const distance = new Array(N + 1).fill(-1);
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b]) => graph[a].push(b));

  let index = 0;
  distance[X] = 0;
  while (index < queue.length) {
    const current = queue[index++];
    graph[current].forEach((next) => {
      if (distance[next] === -1) {
        distance[next] = distance[current] + 1;
        queue.push(next);
      }
    });
  }

  const result = distance.reduce(
    (acc, cur, idx) => (cur === K ? [...acc, idx] : acc),
    []
  );

  return result.length === 0 ? -1 : result.join("\n");
};

console.log(solution(N, M, K, X, edges));
