const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const N = +input[0];
const [zeroNotClicked, target] = input
  .slice(1)
  .map((str) => str.split("").map((e) => +e === 1));
let zeroClicked = zeroNotClicked.map((e, i) => (i - 1 <= 0 ? !e : e));

const checkAvailable = (array) => {
  let counter = 0;
  for (let i = 1; i < N; i++) {
    if (array[i - 1] !== target[i - 1]) {
      array[i - 1] = !array[i - 1];
      array[i] = !array[i];
      if (i !== N - 1) array[i + 1] = !array[i + 1];
      counter++;
    }
  }
  return array.join("") === target.join("") ? counter : Infinity;
};

let result = Math.min(
  checkAvailable(zeroClicked) + 1,
  checkAvailable(zeroNotClicked)
);
console.log(result === Infinity ? -1 : result);
