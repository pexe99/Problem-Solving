const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .map((str) => {
      const [T, F, S, P, C] = str.split(" ").map(Number);
      return 6 * T + 3 * F + 2 * S + P + 2 * C;
    })
    .join(" ")
);
