const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[ax, ay, az], [cx, cy, cz]] = input.map((line) =>
  line.split(" ").map(Number)
);

console.log(`${cx - az} ${cy / ay} ${cz - ax}`);
