const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [total, diff] = input.map(BigInt);
console.log(
  diff % 2n === 0n
    ? `${String(total / 2n + diff / 2n)}\n${String(total / 2n - diff / 2n)}`
    : `${String(total / 2n + diff / 2n + 1n)}\n${String(
        total / 2n - diff / 2n
      )}`
);
