const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N], coordinates] = input.map((line) => line.split(" ").map(Number));

const solution = (N, coordinates) => {
  let [evenMin, oddMin] = [Infinity, Infinity];
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const diff = Math.abs(coordinates[i] - coordinates[j]);
      diff % 2
        ? (oddMin = Math.min(oddMin, diff))
        : (evenMin = Math.min(evenMin, diff));
    }
  }
  return `${evenMin === Infinity ? -1 : evenMin} ${
    oddMin === Infinity ? -1 : oddMin
  }`;
};

console.log(solution(N, coordinates));
