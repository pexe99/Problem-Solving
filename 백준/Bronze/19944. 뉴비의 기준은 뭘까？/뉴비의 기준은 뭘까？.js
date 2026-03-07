const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
console.log(M <= 2 ? "NEWBIE!" : M <= N ? "OLDBIE!" : "TLE!");
