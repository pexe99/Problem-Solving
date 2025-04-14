const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const getRev = (number) => {
  return +[...`${number}`].reverse().join("");
};

console.log(
  getRev(input[0].split(" ").reduce((acc, cur) => acc + getRev(cur), 0))
);
