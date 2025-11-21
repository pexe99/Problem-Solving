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
C: 늘리고자 하는 고객 수
N: 홍보할 수 있는 도시의 수
이후 N개의 줄에 금액 당 늘릴 수 있는 고객의 수가 공백으로 구분되어 주어짐


[output]
C명만큼 고객을 늘리기 위해 필요한 최소 금액

[category]
Dynamic Programming
*/

const MAX_PEOPLE = 100;
const [C, N] = input[0].split(" ").map((e) => +e);
const cities = input.slice(1).map((str) => str.split(" ").map((e) => +e));

const dp = Array.from({ length: C + MAX_PEOPLE }, (_, i) =>
  i === 0 ? 0 : Infinity
);

cities.forEach(([cost, people]) => {
  for (let i = 1; i < dp.length; i++)
    dp[i] = Math.min(dp[i], 0 <= i - people ? dp[i - people] + cost : Infinity);
});

console.log(Math.min(...dp.slice(C)));
