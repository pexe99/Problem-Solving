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
  const visited = new Array(N + 1).fill(false);
  const distance = new Array(N + 1).fill(Infinity);
  const graph = Array.from({ length: N + 1 }, () => []);

  edges.forEach(([a, b]) => graph[a].push(b));

  let index = 0;
  distance[X] = 0;
  visited[X] = true;
  while (index < queue.length) {
    const current = queue[index++];
    graph[current].forEach((next) => {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
      distance[next] = Math.min(distance[next], distance[current] + 1);
    });
  }

  const result = distance.reduce(
    (acc, cur, idx) => (cur === K ? [...acc, idx] : acc),
    []
  );

  return result.length === 0 ? -1 : result.join("\n");
};

console.log(solution(N, M, K, X, edges));
