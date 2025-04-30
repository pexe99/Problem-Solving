const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

let T = +input.splice(0, 1);

const getMaxScore = (n, scores) => {
  for (let i = 1; i < n; i++) {
    scores[1][i] += Math.max(
      scores[0][i - 1],
      scores[0][i - 2] || 0,
      scores[1][i - 2] || 0
    );
    scores[0][i] += Math.max(
      scores[1][i - 1],
      scores[0][i - 2] || 0,
      scores[1][i - 2] || 0
    );
  }
  return Math.max(scores[0][n - 1], scores[1][n - 1]);
};

while (T--) {
  const n = +input.splice(0, 1);
  const scores = input.splice(0, 2).map((str) => str.split(" ").map(Number));
  console.log(getMaxScore(n, scores));
}
