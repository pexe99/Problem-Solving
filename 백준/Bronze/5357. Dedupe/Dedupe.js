const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((line) => {
  console.log(
    [...line]
      .reduce((acc, cur) => acc[acc.length - 1] !== cur ? acc + cur : acc, "")
  );
});
