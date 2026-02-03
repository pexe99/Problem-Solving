const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const MOD = 1e9;
const FULL_MASK = (1 << 2) - 1;

const getStairNumber = (digit, len, bitmask, N, stairNumber) => {
  if (stairNumber[digit][len][bitmask]) return stairNumber[digit][len][bitmask];
  else if (len === 0) return bitmask === FULL_MASK ? 1 : 0;
  else {
    if (digit < 9)
      stairNumber[digit][len][bitmask] += getStairNumber(
        digit + 1,
        len - 1,
        bitmask | (digit + 1 === 9 ? 2 : 0),
        N,
        stairNumber
      );
    if (digit > 0)
      stairNumber[digit][len][bitmask] += getStairNumber(
        digit - 1,
        len - 1,
        bitmask | (digit - 1 === 0 ? 1 : 0),
        N,
        stairNumber
      );
    return stairNumber[digit][len][bitmask] % MOD;
  }
};

const solution = (N) => {
  const stairNumber = Array.from({ length: 10 }, () =>
    Array.from({ length: N + 1 }, () => new Array(4).fill(0))
  );

  let result = 0;
  for (let i = 1; i <= 9; i++)
    result =
      (result +
        getStairNumber(
          i,
          N - 1,
          i === 0 ? 1 : i === 9 ? 2 : 0,
          N,
          stairNumber
        )) %
      MOD;
  return result;
};

console.log(solution(N));
