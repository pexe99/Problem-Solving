const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const strings = input.map((str) => str.trim());

const isSurprisingStr = (str) => {
  const counter = Array.from({ length: str.length }, () => new Set());
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const current = str[i] + str[j];
      if (counter[j - i].has(current)) return false;
      counter[j - i].add(current);
    }
  }
  return true;
};

strings.forEach((str) => {
  if (str !== "*") {
    console.log(
      `${str} is ${isSurprisingStr(str) ? "surprising." : "NOT surprising."}`
    );
  }
});
