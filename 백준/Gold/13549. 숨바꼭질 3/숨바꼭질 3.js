const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const MAXIMUM = 100000;

const [[N, K]] = input.map((string) => string.split(" ").map(Number));

const solution = (N, K) => {
  const queue = new Array(MAXIMUM * 2);
  const dist = new Array(MAXIMUM + 1).fill(Infinity);
  let [head, tail] = [MAXIMUM, MAXIMUM + 1];

  dist[N] = 0;
  queue[head] = N;
  while (head < tail) {
    const current = queue[head++];
    if (current === K) return dist[K];

    for (const [next, cost] of [
      [current * 2, 0],
      [current - 1, 1],
      [current + 1, 1],
    ]) {
      if (next < 0 || MAXIMUM < next) continue;
      if (dist[next] > dist[current] + cost) {
        dist[next] = dist[current] + cost;
        cost === 0 ? (queue[--head] = next) : (queue[tail++] = next);
      }
    }
  }
};

console.log(solution(N, K));
