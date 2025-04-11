const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const MAXIMUM = 100000;
const [N, K] = input[0].split(" ").map(Number);

const deque = new Map();
const dist = new Array(MAXIMUM + 1).fill(Infinity);

dist[N] = 0;
deque.set(0, N);
let front = 0,
  back = 1;

while (front < back) {
  const current = deque.get(front);
  deque.delete(front++);

  if (current === K) {
    console.log(dist[K]);
    break;
  }

  for (const [next, cost] of [
    [current * 2, 0],
    [current + 1, 1],
    [current - 1, 1],
  ]) {
    if (next < 0 || MAXIMUM < next) continue;
    if (dist[next] > dist[current] + cost) {
      dist[next] = dist[current] + cost;
      cost === 0 ? deque.set(--front, next) : deque.set(back++, next);
    }
  }
}
