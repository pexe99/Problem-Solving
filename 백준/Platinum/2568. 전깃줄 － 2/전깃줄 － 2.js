const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...wires] = input.map((string) => string.split(" ").map(Number));

const solution = (N, wires) => {
  const tails = [];
  const prev = new Array(N).fill(-1);
  wires = wires.sort((a, b) => a[1] - b[1]).map((e) => e[0]);

  const lowerBound = (target) => {
    if (tails.length === 0) return 0;
    let [lo, hi] = [0, tails.length];
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (target <= wires[tails[mid]]) hi = mid;
      else lo = mid + 1;
    }
    return hi;
  };

  wires.forEach((e, i) => {
    const target = lowerBound(e, tails);
    prev[i] = target === 0 ? -1 : tails[target - 1];
    if (target === tails.length) tails.push(i);
    else tails[target] = e < wires[tails[target]] ? i : tails[target];
  });

  const LIS = new Set();
  let iter = tails[tails.length - 1];
  while (0 <= iter) {
    LIS.add(wires[iter]);
    iter = prev[iter];
  }

  const result = wires.filter((e) => !LIS.has(e)).sort((a, b) => a - b);

  return `${result.length}\n${result.join("\n")}`;
};

console.log(solution(N, wires));
