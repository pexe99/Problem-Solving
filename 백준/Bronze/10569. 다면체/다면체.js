const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(1)
  .forEach((e) =>
    console.log(
      e
        .split(" ")
        .reduce((acc, cur, idx) => acc + +cur * (idx % 2 ? 1 : -1), 0) + 2
    )
  );
