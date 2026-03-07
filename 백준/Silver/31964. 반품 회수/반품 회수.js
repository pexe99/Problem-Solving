const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N], X, T] = input.map((line) => line.split(" ").map(Number));

const solution = (N, X, T) => {
  const endpoint = Math.max(...X);
  let [result, position] = [endpoint, endpoint];
  for (let i = N - 1; i >= 0; i--) {
    result += position - X[i];
    result += result < T[i] ? T[i] - result : 0;
    position = X[i];
  }
  return result + position;
};

console.log(solution(N, X, T));
