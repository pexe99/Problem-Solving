const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIVISOR = BigInt(1_000_000_007);
const n = BigInt(input[0]);

const multiply = (a, b) => {
  const newMatrix = [
    [0n, 0n],
    [0n, 0n],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        newMatrix[i][j] =
          (newMatrix[i][j] + ((a[i][k] * b[k][j]) % DIVISOR)) % DIVISOR;
      }
    }
  }
  return newMatrix;
};

const getNthFiboMatrixIterative = (n) => {
  let result = [
    [1n, 0n],
    [0n, 1n],
  ];
  let base = [
    [1n, 1n],
    [1n, 0n],
  ];

  while (n > 0n) {
    if (n % 2n === 1n) result = multiply(result, base);
    base = multiply(base, base);
    n = n / 2n;
  }

  return result;
};

if (n === 0n) {
  console.log(0);
} else {
  const result = getNthFiboMatrixIterative(n - 1n);
  console.log(result[0][0].toString());
}
