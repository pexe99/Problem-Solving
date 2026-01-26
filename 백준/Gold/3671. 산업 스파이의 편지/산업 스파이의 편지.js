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

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0) return false;
  return true;
};

const getPrimeCount = (array) => {
  const primeSet = new Set();
  const visited = new Array(array.length).fill(false);
  const backtrack = (number) => {
    for (let i = 0; i < array.length; i++) {
      if (visited[i]) continue;
      const current = number + array[i];
      if (!primeSet.has(+current) && isPrime(+current)) primeSet.add(+current);
      visited[i] = true;
      backtrack(current);
      visited[i] = false;
    }
  };
  backtrack("", array);
  return primeSet.size;
};

const solution = (c, testcases) => {
  return testcases.map((test) => getPrimeCount(test)).join("\n");
};

console.log(solution(c, testcases));
