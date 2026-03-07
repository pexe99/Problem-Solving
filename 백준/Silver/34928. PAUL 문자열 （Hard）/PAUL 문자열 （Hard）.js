const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, paulStr] = input;

const solution = (N, paulStr) => {
  const PAUL = "PAUL";
  let index = 0,
    current = 0;
  while (index < +N) {
    if (current === 4) break;
    else if (paulStr[index] === PAUL[current]) {
      current++;
      index++;
    } else index += 2;
  }
  return current === 4 && (N - index) % 2 === 0 ? "YES" : "NO";
};

console.log(solution(N, paulStr));
