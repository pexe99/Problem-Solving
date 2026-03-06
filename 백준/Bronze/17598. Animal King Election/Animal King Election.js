const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [lion, tiger] = input.reduce(
  (acc, cur) => {
    acc[+(cur === "Tiger")]++;
    return acc;
  },
  [0, 0]
);

console.log(lion > tiger ? "Lion" : "Tiger");
