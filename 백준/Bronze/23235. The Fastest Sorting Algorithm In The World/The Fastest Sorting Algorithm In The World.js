const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  Array.from(
    { length: input.length - 1 },
    (_, i) => (`Case ${i + 1}: Sorting... done!`)
  ).join("\n")
);
