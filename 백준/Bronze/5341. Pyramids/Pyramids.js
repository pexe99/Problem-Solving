const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(0, input.length - 1)
  .forEach((e) =>
    console.log(
      Array.from({ length: +e }, (_, i) => i + 1).reduce(
        (acc, cur) => acc + cur
      )
    )
  );
