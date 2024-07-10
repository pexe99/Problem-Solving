const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const numbers = input.slice(1).map((str) => str.split("").map((e) => +e === 1));

while (numbers.length) {
  let [a, b] = [numbers.shift(), numbers.shift()];
  let result = a.reduce((acc, cur, idx) => acc + +(cur !== b[idx]), 0);
  console.log(`Hamming distance is ${result}.`);
}
