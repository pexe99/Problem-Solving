const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

let index = 0;
let T = input.shift();

while (index++ < T) {
  const [n, s, d] = input.shift().split(" ").map(Number);
  console.log(
    `Data Set ${index}:\n${input.splice(0, n).reduce((acc, cur) => {
      const [di, vi] = cur.split(" ").map(Number);
      return acc + (di <= s * d ? vi : 0);
    }, 0)}\n`
  );
}
