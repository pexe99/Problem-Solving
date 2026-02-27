const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(0, input.length - 1).forEach((e) => {
  console.log((1 + +e + (+e) ** 2 + (+e) ** 3 + (+e) ** 4).toFixed(2));
});
