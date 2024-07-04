const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);
const castle = input.slice(1).map((str) => str.split(""));
const row = Array.from({ length: N }, () => false);
const column = Array.from({ length: M }, () => false);

castle.forEach((arr, i) =>
  arr.forEach((e, j) => {
    if (e === "X") {
      row[i] = true;
      column[j] = true;
    }
  })
);

console.log(
  Math.max(
    N - row.reduce((res, cur) => res + +cur, 0),
    M - column.reduce((res, cur) => res + +cur, 0)
  )
);
