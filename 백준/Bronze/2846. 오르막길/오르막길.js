const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const road = input[1].split(" ").map((e) => +e);
let max = road[0],
  min = 0,
  result = 0;
for (let high of road) {
  if (max === high) min = high;
  else if (high < max) min = max = high;
  else {
    max = high;
    result = Math.max(result, max - min);
  }
}

console.log(result);
