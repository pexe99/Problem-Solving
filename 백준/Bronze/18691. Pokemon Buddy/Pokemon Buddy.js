const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((line) => {
  const [G, C, E] = line.split(" ").map(Number);
  console.log(E <= C ? 0 : (E - C) * [1, 3, 5][G - 1]);
});
