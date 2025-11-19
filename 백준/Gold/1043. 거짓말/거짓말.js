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
N(사람의 수), M(파티의 수)
(진실을 아는 사람의 수), (진실을 아는 사람의 번호를 나열)
이후 M개의 줄에 파티에 참여하는 사람의 번호들이 주어짐


[output]
거짓말쟁이가 되지 않으면서 거짓말을 할 수 있는 파티의 개수

[category]

*/

const [N, M] = input[0].split(" ").map((e) => +e);
const truth = input[1]
  .split(" ")
  .slice(1)
  .map((e) => +e);
const party = input.slice(2).map((str) =>
  str
    .split(" ")
    .slice(1)
    .map((e) => +e)
);

const root = Array.from({ length: N + 1 }, (_, i) => i);

const find = (e) => (root[e] === e ? e : find(root[e]));

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) root[rootB] = rootA;
};

const truthTeller = new Set();
party.forEach((p) => p.forEach((e) => union(p[0], e)));
truth.forEach((e) => truthTeller.add(find(e)));

console.log(
  party.filter((p) => p.every((e) => !truthTeller.has(find(e)))).length
);
