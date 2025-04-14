const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const padded = input[0].padStart(Math.ceil(input[0].length / 3) * 3, "0");

let result = "";
for (let i = 0; i < padded.length; i += 3) {
  result += parseInt(padded.slice(i, i + 3), 2).toString(8);
}

console.log(result);
