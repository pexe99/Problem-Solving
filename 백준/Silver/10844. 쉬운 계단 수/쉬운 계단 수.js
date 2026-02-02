const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const MOD = 1000000000;

const getStairNumber = (digit, len, stairNumber) => {
  if (digit < 0 || digit > 9) return 0;
  else if (stairNumber[digit][len] !== undefined)
    return stairNumber[digit][len];
  else {
    stairNumber[digit][len] =
      (getStairNumber(digit - 1, len - 1, stairNumber) +
        getStairNumber(digit + 1, len - 1, stairNumber)) %
      MOD;
    return stairNumber[digit][len];
  }
};

const solution = (N) => {
  const stairNumber = Array.from({ length: 10 }, () => []);
  for (let i = 0; i <= 9; i++) stairNumber[i][1] = 1;

  let result = 0;
  for (let i = 1; i <= 9; i++)
    result = (result + getStairNumber(i, N, stairNumber)) % MOD;
  return result;
};

console.log(solution(N));
