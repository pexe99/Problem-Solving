const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.forEach((e) => {
  const current = e.split(" ").map(Number);
  if (current.length === 2)
    console.log(`${current[0] + current[1]} ${current[0] * current[1]}`);
});
