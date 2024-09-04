let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const binarySearch = (array, n) => {
  let [start, end] = [0, array.length - 1];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] > n) end = mid - 1;
    else start = mid + 1;
  }
  return end + 1;
};

let caseCounter = 0;
let index = 0;

while (index < input.length) {
  // 첫 번째 줄에서 집의 수 N을 읽음
  const N = +input[index];
  if (N === 0) break; // 0이면 종료
  index++;

  // N개의 집 좌표 읽기
  const house = input
    .slice(index, index + N)
    .map((str) => str.split(" ").map((e) => +e));
  index += N;

  // 발전소 좌표와 q (질문 수) 읽기
  const [ax, ay, bx, by, q] = input[index].split(" ").map((e) => +e);
  index++;

  // 각 질문 처리
  const cases = input
    .slice(index, index + q)
    .map((str) => str.split(" ").map((e) => +e));
  index += q;

  // 각 집의 발전소 A, B와의 거리 계산 및 정렬
  const distA = house
    .map(([hx, hy]) => (hx - ax) ** 2 + (hy - ay) ** 2)
    .sort((a, b) => a - b);
  const distB = house
    .map(([hx, hy]) => (hx - bx) ** 2 + (hy - by) ** 2)
    .sort((a, b) => a - b);

  console.log(`Case ${++caseCounter}:`);

  // 각 질문에 대해 보호받지 못하는 집의 수 계산
  cases.forEach(([r1, r2]) => {
    let protect = binarySearch(distA, r1 ** 2) + binarySearch(distB, r2 ** 2);
    console.log(0 < N - protect ? N - protect : 0);
  });
}
