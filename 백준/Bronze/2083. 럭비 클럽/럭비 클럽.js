const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(0, input.length - 1).forEach((line) => {
  const [name, age, weight] = line.split(" ");
  console.log(`${name} ${17 < +age || 80 <= weight ? "Senior" : "Junior"}`);
});
