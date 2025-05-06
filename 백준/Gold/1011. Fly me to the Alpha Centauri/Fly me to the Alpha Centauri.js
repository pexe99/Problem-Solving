const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

let T = +input.shift();

const getLeastMove = (x, y) => {
  y -= x;
  let counter = 0,
    k = 1;
  while (0 < y) {
    if (k < y) {
      counter += 2;
      y -= k * 2;
    } else {
      counter += 1;
      y -= k;
    }
    k++;
  }
  return counter;
};

while (T--) {
  console.log(getLeastMove(...input.shift().split(" ").map(Number)));
}
