const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(1)
  .forEach((e) =>
    console.log(new Set(e.split(" ")).size === 1 ? "OK" : "ERROR")
  );
