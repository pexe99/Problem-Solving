const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(0, input.length - 1).forEach((e) => {
  console.log(`Objects weighing ${(+e).toFixed(2)} on Earth will weigh ${(
    0.167 * +e
  ).toFixed(2)} on the moon.`);
});
