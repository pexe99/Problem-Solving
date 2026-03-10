const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, M, V], ...edges] = input.map((line) => line.split(" ").map(Number));

const getDfsPath = (startNode, graph) => {
  const path = [];
  const visited = new Array(graph.length).fill(false);

  const DFS = (curNode) => {
    path.push(curNode);
    graph[curNode].forEach((nextNode) => {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        DFS(nextNode);
      }
    });
  };

  visited[startNode] = true;
  DFS(startNode);

  return path;
};

const getBfsPath = (startNode, graph) => {
  const path = [startNode];
  const queue = [startNode];
  const visited = new Array(graph.length).fill(false);

  let index = 0;
  visited[startNode] = true;
  while (index < queue.length) {
    const curNode = queue[index++];
    graph[curNode].forEach((next) => {
      if (!visited[next]) {
        visited[next] = true;
        path.push(next);
        queue.push(next);
      }
    });
  }

  return path;
};

const solution = (N, M, V, edges) => {
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });
  graph.forEach((e) => e.sort((a, b) => a - b));

  return `${getDfsPath(V, graph).join(" ")}\n${getBfsPath(V, graph).join(" ")}`;
};

console.log(solution(N, M, V, edges));
