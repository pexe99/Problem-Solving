const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const DIVISOR = 10000;
const COMMANDS = ["D", "S", "L", "R"];
const [[N], ...numbers] = input.map((str) => str.split(" ").map((e) => +e));

function D(n) {
  return (n * 2) % DIVISOR;
}
function S(n) {
  return n === 0 ? 9999 : n - 1;
}
function L(n) {
  return Math.floor((n % 1000) * 10 + Math.floor(n / 1000));
}
function R(n) {
  return Math.floor((n % 10) * 1000 + Math.floor(n / 10));
}

const funcs = { D, S, L, R };

numbers.forEach(([start, end]) => {
  let visited = Array(DIVISOR).fill(false);
  let queue = [{ num: start, path: "" }];
  visited[start] = true;

  let front = 0;
  while (front < queue.length) {
    const { num, path } = queue[front++];
    if (num === end) {
      console.log(path);
      break;
    }

    for (let command of COMMANDS) {
      const nextNum = funcs[command](num);
      if (!visited[nextNum]) {
        visited[nextNum] = true;
        queue.push({ num: nextNum, path: path + command });
      }
    }
  }
});
