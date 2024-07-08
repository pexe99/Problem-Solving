const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [N, K, S] = input[0].split(" ").map((e) => +e);
const [left, right] = input.slice(1).reduce(
  ([left, right], str) => {
    let current = str.split(" ").map((e) => +e);
    current[0] -= S;
    if (current[0] < 0) left.push(current);
    else right.push(current);
    return [left, right];
  },
  [[], []]
);
left.sort((a, b) => b[0] - a[0]);
right.sort((a, b) => a[0] - b[0]);

const getMovement = (array) => {
  let result = 0;
  while (array.length) {
    let available = K;
    result += Math.abs(array.at(-1)[0]) * 2;
    while (available && array.length) {
      if (array.at(-1)[1] <= available) {
        available -= array.at(-1)[1];
        array.pop();
      } else {
        array.at(-1)[1] -= available;
        available = 0;
      }
    }
  }
  return result;
};

console.log(getMovement(left) + getMovement(right));
