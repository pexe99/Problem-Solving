const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[ha, ma, sa], [hb, mb, sb]] = input.map((line) =>
  line.split(" : ").map(Number)
);
const diff = hb * 3600 + mb * 60 + sb - (ha * 3600 + ma * 60 + sa);
console.log(diff < 0 ? diff + 24 * 3600 : diff);
