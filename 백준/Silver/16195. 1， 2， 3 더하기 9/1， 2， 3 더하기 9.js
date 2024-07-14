const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const DIVISOR = 1000000009;
const numbers = input.slice(1).map((str) => str.split(" ").map((e) => +e));
const DP = Array.from({ length: 1001 }, () =>
  Array.from({ length: 1001 }, () => 0)
);
DP[1][1] = DP[2][1] = DP[2][2] = DP[3][1] = DP[3][3] = 1;
DP[3][2] = 2;

for (let i = 4; i <= 1000; i++) {
  for (let j = Math.ceil(i / 3); j <= i; j++) {
    DP[i][j] =
      ((DP[i - 1]?.[j - 1] || 0) +
        (DP[i - 2]?.[j - 1] || 0) +
        (DP[i - 3]?.[j - 1] || 0)) %
      DIVISOR;
  }
}

numbers.forEach(([N, M]) =>
  console.log(DP[N].slice(1, M + 1).reduce((acc, cur) => (acc + cur) % DIVISOR))
);
