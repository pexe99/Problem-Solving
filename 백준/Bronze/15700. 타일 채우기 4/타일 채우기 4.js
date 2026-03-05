const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(BigInt);
console.log(((N * M) / 2n).toString());
