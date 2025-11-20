const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

/*
[input]
M: 주사위의 수
이후, M개의 줄에 주사위 면의 개수와 면에 적힌 수의 총합이 주어짐


[output]
각 주사위를 굴렸을 때의 기댓값의 합을 모듈러 형식으로 출력

[category]
Mathematics
*/

const N = 1000000007n;
const diceArray = input
  .slice(1)
  .map((string) => string.split(" ").map((e) => BigInt(+e)));

const modPow = (base, exp) => {
  let result = 1n;
  while (exp > 0) {
    if (exp & 1n) result = (result * base) % N;
    base = (base * base) % N;
    exp >>= 1n;
  }
  return result;
};

const getModInverse = (a) => modPow(a, N - 2n);

console.log(
  Number(
    diceArray.reduce((res, [a, b]) => (res + b * getModInverse(a)) % N, 0n)
  )
);
