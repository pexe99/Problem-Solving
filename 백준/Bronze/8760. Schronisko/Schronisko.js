const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((e) => {
  const [w, k] = e.split(" ").map(Number);
  console.log(Math.floor((w * k) / 2));
});
