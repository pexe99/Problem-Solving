const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const target = "I" + "OI".repeat(+input.shift());
const S = +input.shift();

console.log(
  [...input[0]].reduce((counter, _, index) => {
    if (index + target.length <= S) {
      if (input[0].substring(index, index + target.length) === target)
        return counter + 1;
    }
    return counter;
  }, 0)
);
