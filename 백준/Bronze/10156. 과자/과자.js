const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [K, N, M] = input[0].split(" ").map(Number);
const result = K * N - M;
console.log(result <= 0 ? 0 : result);
