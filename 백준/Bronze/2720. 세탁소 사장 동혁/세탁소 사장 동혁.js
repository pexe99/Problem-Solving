const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(1)
  .forEach((e) =>
    console.log(
      `${Math.floor(+e / 25)} ${Math.floor((+e % 25) / 10)} ${Math.floor(
        (+e % 25 % 10) / 5
      )} ${+e % 25 % 10 % 5}`
    )
  );
