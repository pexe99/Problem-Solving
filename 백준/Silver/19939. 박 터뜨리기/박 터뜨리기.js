const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

let [n, k] = input[0].split(" ").map((e) => +e);
let counter = Array.from({ length: k + 1 }, (_, i) => (i === 0 ? 0 : 1));

for (let i = 1; i <= k; i++) n -= i;
if (n < 0) {
  console.log(-1);
  return;
}

while (0 < n && 0 < k) {
  if (k <= n) {
    n -= k;
    counter[k]++;
  } else k--;
}

console.log(counter.reduce((acc, cur) => acc + cur) - counter.at(-1));
