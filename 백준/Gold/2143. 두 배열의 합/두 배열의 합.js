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
T: 목표 합
N: 배열 1의 길이
이후 N개의 배열 요소가 공백으로 구분되어 주어짐
M: 배열 2의 길이
이후 M개의 배열 요소가 공백으로 구분되어 주어짐

[output]
더해서 T가 되는 부 배열 쌍의 개수를 출력
*/

const [T, N, M] = [input[0], input[1], input[3]].map(Number);
const arrN = input[2].split(" ").map(Number);
const arrM = input[4].split(" ").map(Number);

const prefixSum = {};
for (let start = 0; start < N; start++) {
  let sum = 0;
  for (let i = start; i < N; i++) {
    sum += arrN[i];
    prefixSum[sum] = (prefixSum[sum] || 0) + 1;
  }
}

let result = 0;
for (let start = 0; start < M; start++) {
  let sum = 0;
  for (let i = start; i < M; i++) {
    sum += arrM[i];
    result += prefixSum[T - sum] || 0;
  }
}

console.log(result);
