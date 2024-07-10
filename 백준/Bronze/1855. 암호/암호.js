const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [N, crypto] = [...input];
let array = [],
  result = "";
for (let i = 0; i < crypto.length / N; i++) {
  let current = [...crypto.substr(i * N, N)];
  array.push(i % 2 === 1 ? current.reverse() : current);
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < array.length; j++) result += array[j][i];
}
console.log(result);
