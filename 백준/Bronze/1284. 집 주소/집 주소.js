const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(0, input.length - 1)
  .forEach((address) =>
    console.log(
      [...address].reduce(
        (acc, cur) => acc + (+cur === 1 ? 2 : +cur === 0 ? 4 : 3),
        0
      ) +
        address.length +
        1
    )
  );
