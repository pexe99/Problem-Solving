const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, matryoshka] = input.map((str) => str.split(" ").map((e) => +e));
const counter = {};
matryoshka.forEach((e) => {
  counter[e] = (counter[e] || 0) + 1;
});
console.log(Math.max(...Object.values(counter)));
