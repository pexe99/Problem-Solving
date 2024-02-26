var fs = require("fs");

// boj 제출용 코드
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((e) => +e);
let pd = input.slice(1).map((str) =>
  str
    .split(" ")
    .map((e) => +e)
    .slice(1)
);

let queue = [],
  result = [];
let graph = Array.from({ length: N }, () => []);
let income = Array.from({ length: N }, () => 0);

pd.forEach((arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    graph[arr[i] - 1].push(arr[i + 1] - 1);
    income[arr[i + 1] - 1]++;
  }
});

while (true) {
  income.forEach((v, i) => {
    if (v === 0) {
      queue.push(i);
      income[i] = -1;
    }
  });
  if (queue.length === 0) break;
  let current = queue.pop();
  graph[current].forEach((e) => income[e]--);
  graph[current] = [];
  result.push(current);
}

if (result.length !== N) console.log(0);
else result.forEach((e) => console.log(e + 1));