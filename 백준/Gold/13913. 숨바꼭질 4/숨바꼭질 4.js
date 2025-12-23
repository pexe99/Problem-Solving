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
  const queue = [N];
  const parents = [];
  const distance = Array.from({ length: MAXIMUM + 1 }, (_, index) =>
    index === N ? 0 : Infinity
  );

  let index = 0;
  while (index < queue.length) {
    const current = queue[index++];
    if (current === K) break;

    for (const next of [current * 2, current - 1, current + 1]) {
      if (next < 0 || MAXIMUM < next) continue;
      const nextDistance = distance[current] + 1;
      if (distance[next] > nextDistance) {
        distance[next] = nextDistance;
        parents[next] = current;
        queue.push(next);
      }
    }
  }

  const path = [];
  let current = K;
  while (true) {
    path.push(current);
    if (current === N) break;
    current = parents[current];
  }

  return `${distance[K]}\n${path.reverse().join(" ")}`;
};

console.log(solution(N, K));
