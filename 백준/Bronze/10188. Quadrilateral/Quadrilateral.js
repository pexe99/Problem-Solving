const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .slice(1)
    .map((e) => {
      const [w, h] = e.split(" ").map(Number);
      return new Array(h).fill("X".repeat(w)).join("\n");
    })
    .join("\n\n")
);
