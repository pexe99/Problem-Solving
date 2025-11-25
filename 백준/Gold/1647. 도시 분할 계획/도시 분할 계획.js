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
N: 집의 개수
M: 길의 개수
이후 M개의 줄에 두 집의 번호와 그 사이 길의 유지 비용이 공백으로 주어짐

[output]
두 마을로 나누고 최소한의 길만 남겼을 때의 유지비 총합의 최소값

[category]
Minimum Spanning Tree
Union-Find Algorithm
Graph
*/

const [N, M] = input[0].split(" ").map(Number);
const roads = input
  .slice(1)
  .map((str) => {
    const [a, b, weight] = str.split(" ").map(Number);
    return a < b ? [a, b, weight] : [b, a, weight];
  })
  .sort((a, b) => a[2] - b[2]);

const root = Array.from({ length: N + 1 }, (_, index) => index);

const find = (node) => {
  if (node === root[node]) return node;
  else {
    const curRoot = find(root[node]);
    root[node] = curRoot;
    return curRoot;
  }
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) root[rootB] = rootA;
};

let result = [];

roads.forEach(([a, b, weight]) => {
  if (find(a) !== find(b)) {
    union(a, b);
    result.push(weight);
  }
});

result.pop();
console.log(result.reduce((acc, cur) => acc + cur, 0));
