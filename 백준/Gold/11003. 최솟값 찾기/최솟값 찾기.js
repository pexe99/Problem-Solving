const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, L], A] = input.map((line) => line.split(" ").map(Number));

const solution = (N, L, A) => {
  let head = 0,
    tail = 0;
  const queue = {};
  let result = "";

  A.forEach((value, index) => {
    while (head < tail && value < queue[tail - 1].value) delete queue[tail--];
    queue[tail++] = { value: value, index: index };
    while (queue[head].index < index - L + 1) delete queue[head++];
    result += queue[head].value + " ";
    if (result.length % 10000 === 0) {
      process.stdout.write(result);
      result = "";
    }
  });

  process.stdout.write(result.trimEnd());
};

solution(N, L, A);
