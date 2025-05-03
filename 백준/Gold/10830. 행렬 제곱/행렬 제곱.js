const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIVISOR = 1000;

let [N, B] = input.shift().split(" ").map(Number);
let origin = input.map((str) =>
  str.split(" ").map((value) => +value % DIVISOR)
);

const multiply = (a, b) => {
  const newMatrix = Array.from({ length: a.length }, () =>
    new Array(b.length).fill(0)
  );
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      newMatrix[i][j] = a[i].reduce(
        (acc, cur, idx) => (acc + cur * b[idx][j]) % DIVISOR,
        0
      );
    }
  }
  return newMatrix;
};

const matrixPower = (matrix, exp) => {
  if (exp === 1) return matrix;
  let half = matrixPower(matrix, Math.floor(exp / 2));
  let result = multiply(half, half);
  if (exp % 2 === 1) result = multiply(result, matrix);
  return result;
};

const result = matrixPower(origin, B);
result.forEach((row) => console.log(row.join(" ")));
