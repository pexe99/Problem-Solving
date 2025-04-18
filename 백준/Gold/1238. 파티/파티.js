const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M, X] = input[0].split(" ").map(Number);
const forwardGraph = Array.from({ length: N }, () => []);
const backwardGraph = Array.from({ length: N }, () => []);
input.slice(1).forEach((str) => {
  const [from, to, value] = str.split(" ").map(Number);
  forwardGraph[from - 1].push([to - 1, value]);
  backwardGraph[to - 1].push([from - 1, value]);
});

const dajikstra = (start, graph) => {
  const dist = new Array(N).fill(Infinity);
  const queue = [start];
  dist[start] = 0;
  while (queue.length) {
    const cur = queue.pop();
    graph[cur].forEach(([next, value]) => {
      if (dist[next] > dist[cur] + value) {
        dist[next] = dist[cur] + value;
        queue.push(next);
      }
    });
    queue.sort((a, b) => dist[b] - dist[a]);
  }
  return dist;
};

const forwardDist = dajikstra(X - 1, forwardGraph);
const backwardDist = dajikstra(X - 1, backwardGraph);
const result = forwardDist.map((cur, idx) => cur + backwardDist[idx]);
console.log(Math.max(...result));
