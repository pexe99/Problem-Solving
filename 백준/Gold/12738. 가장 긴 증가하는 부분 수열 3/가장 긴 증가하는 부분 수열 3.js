const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], sequence] = input.map((e) => e.split(" ").map(Number));

const solution = (N, sequence) => {
  const dp = [];

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

  sequence.forEach((number) => {
    const index = lowerBound(number, dp);
    if (index === dp.length) dp.push(number);
    else dp[index] = Math.min(dp[index], number);
  });

  return dp.length;
};

console.log(solution(N, sequence));
