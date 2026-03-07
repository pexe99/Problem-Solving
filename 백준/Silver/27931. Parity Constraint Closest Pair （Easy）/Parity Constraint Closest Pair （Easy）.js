const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N], coordinates] = input.map((line) => line.split(" ").map(Number));

const solution = (N, coordinates) => {
  let [evenMin, oddMin] = [Infinity, Infinity];
  let [lastEven, lastOdd] = [null, null];
  coordinates
    .sort((a, b) => a - b)
    .forEach((cur, idx, arr) => {
      if (cur % 2 === 0) {
        lastEven !== null && (evenMin = Math.min(evenMin, cur - lastEven));
        lastOdd !== null && (oddMin = Math.min(oddMin, cur - lastOdd));
        lastEven = cur;
      } else {
        lastOdd !== null && (evenMin = Math.min(evenMin, cur - lastOdd));
        lastEven !== null && (oddMin = Math.min(oddMin, cur - lastEven));
        lastOdd = cur;
      }
    });
  return `${evenMin === Infinity ? -1 : evenMin} ${
    oddMin === Infinity ? -1 : oddMin
  }`;
};

console.log(solution(N, coordinates));
