const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const cranes = input[1]
  .split(" ")
  .map((e) => {
    return { weight: +e, boxes: [] };
  })
  .sort((a, b) => b.weight - a.weight);
const M = +input[2];
const boxes = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

for (let box of boxes) {
  let available = false;
  for (let crane of cranes) {
    if (box <= crane.weight) {
      crane.boxes.push(box);
      cranes.sort(
        (a, b) => a.boxes.length - b.boxes.length || a.weight - b.weight
      );
      available = true;
      break;
    }
  }
  if (!available) {
    console.log(-1);
    process.exit(0);
  }
}

console.log(cranes.reduce((acc, cur) => Math.max(acc, cur.boxes.length), 0));
