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
  const result = Array.from({ length: MAXIMUM + 1 }, () => ({
    distance: Infinity,
    counter: 0,
  }));
  let index = 0;

  result[N].distance = 0;
  result[N].counter++;
  while (index < queue.length) {
    const current = queue[index++];

    for (const next of [current * 2, current - 1, current + 1]) {
      if (next < 0 || MAXIMUM < next) continue;
      const nextDistnace = result[current].distance + 1;
      if (result[next].distance > nextDistnace) {
        result[next].distance = nextDistnace;
        result[next].counter = result[current].counter;
        queue.push(next);
      } else if (result[next].distance === nextDistnace)
        result[next].counter += result[current].counter;
    }
  }

  return `${result[K].distance}\n${result[K].counter}`;
};

console.log(solution(N, K));
