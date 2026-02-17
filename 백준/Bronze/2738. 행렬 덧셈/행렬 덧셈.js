const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const matrix = input.splice(0, N).map((e) => e.split(" ").map(Number));
input.map((e, i) => e.split(" ").map((n, j) => (matrix[i][j] += +n)));

matrix.forEach((e) => console.log(e.join(" ")));
