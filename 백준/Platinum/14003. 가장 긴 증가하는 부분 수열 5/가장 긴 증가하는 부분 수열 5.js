const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], sequence] = input.map((string) => string.split(" ").map(Number));

const solution = (N, sequence) => {
  const tails = [];
  const prev = new Array(N).fill(-1);

  const lowerBound = (target) => {
    if (tails.length === 0) return 0;
    let [lo, hi] = [0, tails.length];
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (target <= sequence[tails[mid]]) hi = mid;
      else lo = mid + 1;
    }
    return hi;
  };

  sequence.forEach((e, i) => {
    const target = lowerBound(e, tails);
    prev[i] = target === 0 ? -1 : tails[target - 1];
    if (target === tails.length) tails.push(i);
    else tails[target] = e < sequence[tails[target]] ? i : tails[target];
  });

  const LIS = [];
  let iter = tails[tails.length - 1];
  while (0 <= iter) {
    LIS.push(sequence[iter]);
    iter = prev[iter];
  }

  return `${LIS.length}\n${LIS.reverse().join(" ")}`;
};

console.log(solution(N, sequence));
