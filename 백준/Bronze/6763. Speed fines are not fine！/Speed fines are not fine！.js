const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  +input[1] <= +input[0]
    ? "Congratulations, you are within the speed limit!"
    : `You are speeding and your fine is \$${
        +input[1] - +input[0] > 30
          ? 500
          : +input[1] - +input[0] > 20
          ? 270
          : 100
      }.`
);
