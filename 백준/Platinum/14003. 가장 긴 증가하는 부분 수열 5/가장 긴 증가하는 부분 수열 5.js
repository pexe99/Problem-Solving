const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], sequence] = input.map((string) => string.split(" ").map(Number));

const lowerBound = (target, array) => {
  if (array.length === 0) return 0;
  let [lo, hi] = [0, array.length];
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (target <= array[mid]) hi = mid;
    else lo = mid + 1;
  }
  return hi;
};

const solution = (N, sequence) => {
  const tails = [];
  const log = [];
  sequence.forEach((e) => {
    const index = lowerBound(e, tails);
    log.push([index, e]);
    if (index === tails.length) tails.push(e);
    else tails[index] = Math.min(tails[index], e);
  });

  const LIS = [];
  let iter = tails.length - 1;
  log.reverse();
  for (const [index, e] of log) {
    if (iter < 0) break;
    if (iter === index) LIS[iter--] = e;
  }

  return `${LIS.length}\n${LIS.join(" ")}`;
};

console.log(solution(N, sequence));
