const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, W, H, L] = input[0].split(" ").map(Number);
const available = Math.floor(W / L) * Math.floor(H / L);
console.log(N <= available ? N : available);
