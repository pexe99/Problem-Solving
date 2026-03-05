const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[ca, ba, pa], [cr, br, pr]] = input.map((line) =>
  line.split(" ").map(Number)
);
console.log(
  (ca < cr ? cr - ca : 0) + (ba < br ? br - ba : 0) + (pa < pr ? pr - pa : 0)
);
