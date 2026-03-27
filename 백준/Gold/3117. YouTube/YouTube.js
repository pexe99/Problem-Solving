const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

/*
[input]
N, K, M: 학생의 수, 동영상의 개수, 남은 수업 시간
firstVideoNum: 각 학생이 처음 시청하는 동영상 번호 N개
recommandVideoNum: 각 동영상의 가장 위에 있는 추천 동영상 K개

[output]
각 학생이 M분에 시청하는 동영상 번호를 공백으로 구분해 출력

[category]
Sparse Table

[solution]
각 영상에 대해 2^k분 이후 시청하는 영상에 대한 정보를 Sparse Table에 저장
이후, 각 학생이 시청을 시작한 영상으로부터 M분 이후 시청하는 영상에 대한 query 수행
*/

const [[N, K, M], firstVideoNum, recommandVideoNum] = input.map((line) =>
  line.split(" ").map(Number)
);

const solution = (N, K, M, firstVideoNum, recommandVideoNum) => {
  const LOG = Math.floor(Math.log2(M)) + 1;
  const sparseTable = Array.from({ length: LOG + 1 }, () =>
    new Array(K + 1).fill(0)
  );
  for (let i = 1; i <= K; i++) sparseTable[0][i] = recommandVideoNum[i - 1];
  for (let k = 1; k <= LOG; k++) {
    for (let i = 1; i <= K; i++)
      sparseTable[k][i] = sparseTable[k - 1][sparseTable[k - 1][i]];
  }

  for (let k = LOG; k >= 0; k--) {
    if ((M - 1) & (1 << k)) {
      for (let i = 0; i < N; i++)
        firstVideoNum[i] = sparseTable[k][firstVideoNum[i]];
    }
  }

  return firstVideoNum.join(" ");
};

console.log(solution(N, K, M, firstVideoNum, recommandVideoNum));
