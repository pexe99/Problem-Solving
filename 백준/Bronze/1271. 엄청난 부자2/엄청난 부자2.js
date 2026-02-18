const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((e) => BigInt(e));
console.log(String((n - (n % m)) / m));
console.log(String(n % m));
