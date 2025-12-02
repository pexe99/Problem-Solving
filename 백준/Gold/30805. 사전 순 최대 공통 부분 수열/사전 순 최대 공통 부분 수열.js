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
N: 수열 A의 길이
이후, 수열 A의 요소 N개가 공백으로 구분되어 주어짐
M: 수열 B의 길이
이후, 수열 B의 요소 M개가 공백으로 구분되어 주어짐

[output]
공통된 부분 수열 중, 사전 순으로 가장 뒤에 있는 수열의 길이를 출력
수열이 존재한다면 수열 요소를 공백으로 구분해 다음 줄에 출력
*/

const [N, M] = [input[0], input[2]].map(Number);
const [arrA, arrB] = [input[1], input[3]].map((str) =>
  str.split(" ").map(Number)
);

const getCommonMaxValue = (arr1, arr2) => {
  const targetSet = new Set(arr1);
  return arr2.filter((e) => targetSet.has(e)).sort((a, b) => b - a)[0];
};

const solution = (N, arrA, M, arrB) => {
  const result = [];
  let target = getCommonMaxValue(arrA, arrB);
  while (target) {
    result.push(target);
    arrA.splice(0, arrA.indexOf(target) + 1);
    arrB.splice(0, arrB.indexOf(target) + 1);
    target = getCommonMaxValue(arrA, arrB);
  }
  console.log(result.length);
  if (result.length) console.log(result.join(" "));
};

solution(N, arrA, M, arrB);
