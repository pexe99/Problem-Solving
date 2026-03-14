const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(0, input.length - 1).forEach((line, idx) => {
  const [N, ...data] = line.split(" ").map(Number);
  const median =
    N % 2 ? data[((N + 1) >> 1) - 1] : (data[(N >> 1) - 1] + data[N >> 1]) / 2;
  console.log(`Case ${idx + 1}: ${median.toFixed(1)}`);
});
