const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  String(input[0].split(" ").reduce((acc, cur) => acc + BigInt(cur), 0n))
);
