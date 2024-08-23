const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const cranes = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const M = +input[2];
const boxes = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const checkAvailable = (time) => {
  let [boxIndex, craneIndex] = [0, 0];
  while (boxIndex < M) {
    if (craneIndex === N || cranes[craneIndex] < boxes[boxIndex]) return false;
    [boxIndex, craneIndex] = [boxIndex + time, craneIndex + 1];
  }
  return true;
};

const binarySearch = () => {
  let [start, end] = [1, M];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (checkAvailable(mid)) end = mid - 1;
    else start = mid + 1;
  }

  return M < start ? -1 : start;
};

console.log(binarySearch());
