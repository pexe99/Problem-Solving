const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const MAXIMUM = 100000;
const [N, K] = input[0].split(" ").map(Number);

const deque = [];
const dist = new Array(MAXIMUM + 1).fill(Infinity);

dist[N] = 0;
deque.push(N);

while (deque.length) {
  const current = deque.shift();

  for (const [next, cost] of [
    [current * 2, 0],
    [current + 1, 1],
    [current - 1, 1],
  ]) {
    if (next < 0 || MAXIMUM < next) continue;
    if (dist[next] > dist[current] + cost) {
      dist[next] = dist[current] + cost;
      cost === 0 ? deque.unshift(next) : deque.push(next);
    }
  }
}

console.log(dist[K]);
