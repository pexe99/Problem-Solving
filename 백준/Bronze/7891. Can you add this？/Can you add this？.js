const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(1)
  .forEach((str) =>
    console.log(str.split(" ").reduce((acc, cur) => acc + +cur, 0))
  );
