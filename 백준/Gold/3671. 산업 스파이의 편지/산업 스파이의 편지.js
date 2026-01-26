const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const c = +input.shift();
const testcases = input.map((e) => [...e]);

const MAXIMUM = 9999999;

const getCombination = (array) => {
  const result = new Set();
  const combination = (current, rest) => {
    rest.forEach((e, i) => {
      result.add(Number(current.join("") + e));
      combination([...current, e], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    });
  };
  combination([], array);
  return result;
};

const solution = (c, testcases) => {
  const isPrime = new Array(MAXIMUM + 1).fill(true);

  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= MAXIMUM; i++) {
    for (let j = i * 2; j <= MAXIMUM; j += i) isPrime[j] = false;
  }

  return testcases
    .map((t) => [...getCombination(t)].filter((e) => isPrime[e]).length)
    .join("\n");
};

console.log(solution(c, testcases));
