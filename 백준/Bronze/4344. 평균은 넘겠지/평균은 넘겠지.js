const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((line) => {
  const [N, ...scores] = line.split(" ").map(Number);
  const average = scores.reduce((acc, cur) => acc + cur, 0) / N;
  console.log(
    `${((scores.filter((e) => average < e).length / N) * 100).toFixed(3)}%`
  );
});
