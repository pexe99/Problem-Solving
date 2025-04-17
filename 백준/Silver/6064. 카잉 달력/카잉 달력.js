const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const cases = input.slice(1).map((str) => str.split(" ").map(Number));

const getGCD = (m, n) => {
  if (m % n === 0) return n;
  else return getGCD(n, m % n);
};

const getLCM = (m, n) => {
  return (m * n) / getGCD(m, n);
};

const getIndex = (M, N, x, y) => {
  for (let year = x; year <= getLCM(M, N); year += M) {
    if (((year - 1) % N) + 1 === y) return year;
  }
  return -1;
};

cases.forEach((c) => console.log(getIndex(...c)));
