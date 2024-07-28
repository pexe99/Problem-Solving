const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const N = +input[0];
const paper = input
  .slice(1)
  .map(
    (str) =>
      str
        .split(/[a-z]+/)
        .filter((e) => e !== "")
        .map((e) => BigInt(e)) // BigInt 객체로 변환
  )
  .reduce((acc, cur) => [...acc, ...cur], [])
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

paper.forEach((e) => console.log(e.toString()));
