const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [apple, banana] = input.reduce(
  (acc, cur, idx) => {
    acc[Math.floor(idx / 3)] += +cur * (3 - (idx % 3));
    return acc;
  },
  [0, 0]
);

console.log(apple > banana ? "A" : apple === banana ? "T" : "B");
