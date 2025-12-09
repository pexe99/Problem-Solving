const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const sequence = input[1].split(" ").map(Number);

const getLowerBound = (value, array) => {
  if (array.length === 0) return 0;

  let [forward, backward] = [0, array.length - 1];
  while (forward <= backward) {
    const middle = Math.floor((forward + backward) / 2);
    if (array[middle] >= value) backward = middle - 1;
    else forward = middle + 1;
  }

  return forward;
};

const solution = (N, sequence) => {
  const LIS = [];

  for (let value of sequence) {
    const iter = getLowerBound(value, LIS);
    if (iter === LIS.length) LIS.push(value);
    else LIS[iter] = value;
  }

  return LIS.length;
};

console.log(solution(N, sequence));
