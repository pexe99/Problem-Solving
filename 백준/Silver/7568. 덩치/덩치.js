const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const group = input.slice(1).map((str) => str.split(" ").map((e) => +e));

const result = new Array(N).fill(1);
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const [aw, ah] = group[i];
    const [bw, bh] = group[j];
    if (aw > bw && ah > bh) result[j]++;
    if (aw < bw && ah < bh) result[i]++;
  }
}

console.log(result.join(" "));
