const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);

let [sum, max] = [0, 0];
const consume = input.slice(1).map((e) => {
  max = Math.max(max, +e);
  sum += +e;
  return +e;
});

const checkAvailable = (K) => {
  let [counter, current] = [0, 0];
  consume.forEach((e) => {
    if (current < e) {
      current = K;
      counter++;
    }
    current -= e;
  });
  return counter <= M;
};

const binarySearch = (min, max) => {
  let start = min,
    end = max;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (!checkAvailable(mid)) [start, end] = [mid + 1, end];
    else [start, end] = [start, mid];
  }
  console.log(end);
};

binarySearch(max, sum);
