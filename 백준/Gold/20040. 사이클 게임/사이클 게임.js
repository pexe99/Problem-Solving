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
N: 점의 개수
M: 진행된 차례의 수
이후 M개의 줄에 선분을 이루는 두 점의 정보가 주어짐

[output]
사이클을 이루는 최초의 시점을 출력
없다면 0을 출력

[category]
Union-Find Algorithm
*/

const [N, M] = input[0].split(" ").map(Number);
const lines = input.slice(1).map((str) => {
  const [a, b] = str.split(" ").map(Number);
  return a < b ? [a, b] : [b, a];
});

const rank = new Array(N).fill(0);
const root = Array.from({ length: N }, (_, index) => index);

const find = (node) => {
  if (node !== root[node]) root[node] = find(root[node]);
  return root[node];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rank[rootA] < rank[rootB]) root[rootB] = rootA;
  else if (rank[rootA] > rank[rootB]) root[rootA] = rootA;
  else {
    root[rootB] = rootA;
    rank[rootB]++;
  }
};

for (let i = 0; i < M; i++) {
  const [a, b] = lines[i];
  if (find(a) !== find(b)) union(a, b);
  else {
    console.log(i + 1);
    return;
  }
}

console.log(0);
