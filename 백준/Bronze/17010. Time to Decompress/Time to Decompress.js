const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(input.slice(1).map((e) => {
  const [repeat, char] = e.split(" ");
  return char.repeat(+repeat);
}).join("\n"));
