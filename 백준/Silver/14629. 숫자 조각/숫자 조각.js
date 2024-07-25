const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const MAXIMUM = 9876543210;
const N = input[0];
const available = Array.from({ length: 10 }, () => true);
if (MAXIMUM < +N) console.log(MAXIMUM);
else {
  let [lowerBound, upperBound] = [0, 0];
  const makeNumber = (numbers, current) => {
    if (numbers.length === N.length) {
      if (+N < +numbers.join("")) {
        upperBound = +numbers.join("");
        return true;
      } else {
        lowerBound = +numbers.join("");
        return false;
      }
    }
    let result = false;
    available[current] = false;
    for (let i = 0; i < available.length; i++) {
      if (available[i]) {
        result = makeNumber([...numbers, i], i);
        if (result) return result;
      }
    }
    available[current] = true;
    return result;
  };
  for (let i = +N[0] - 1; i <= +N[0] + 1; i++) {
    let result = makeNumber([i], i);
    if (result) break;
  }
  console.log(upperBound - +N < +N - lowerBound ? upperBound : lowerBound);
}
