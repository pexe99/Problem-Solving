const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [a, b] = input[0]
  .split("")
  .reduce(
    (acc, cur, idx, arr) =>
      idx % 2
        ? acc
        : [
            acc[0] + (cur === "A" ? +arr[idx + 1] : 0),
            acc[1] + (cur === "B" ? +arr[idx + 1] : 0),
          ],
    [0, 0]
  );

console.log(a < b ? "B" : "A");
