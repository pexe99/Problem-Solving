const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

while (input.length) {
  const N = +input.shift();
  const result = input.splice(0, N).reduce((acc, cur) => acc + BigInt(cur), 0n);
  console.log(result < 0n ? "-" : result === 0n ? "0" : "+");
}
