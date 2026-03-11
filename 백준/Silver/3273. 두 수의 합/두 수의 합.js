const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[n], sequence, [x]] = input.map((line) => line.split(" ").map(Number));

const solution = (n, sequence, x) => {
  let counter = 0;
  const sequenceSet = new Set(sequence);
  for (let i = 1; i < x / 2; i++)
    if (sequenceSet.has(i) && sequenceSet.has(x - i)) counter++;
  return counter;
};

console.log(solution(n, sequence, x));
