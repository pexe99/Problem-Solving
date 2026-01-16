const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];

const getStar = (N) => {
  if (N === 3) return ["  *  ", " * * ", "*****"];
  const star = getStar(N >> 1);
  const result = [];
  star.forEach((str) =>
    result.push(`${" ".repeat(N >> 1)}${str}${" ".repeat(N >> 1)}`)
  );
  star.forEach((str) => result.push(`${str} ${str}`));
  return result;
};

console.log(getStar(N).join("\n"));
