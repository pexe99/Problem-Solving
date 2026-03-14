const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const N = input[0];
for (let i = 1; i < N.length; i++) {
  const head = [...N.substring(0, i)].reduce(
    (acc, cur) => acc * BigInt(cur),
    1n
  );
  const tail = [...N.substring(i)].reduce((acc, cur) => acc * BigInt(cur), 1n);
  if (head === tail) {
    console.log("YES");
    return;
  }
}
console.log("NO");
