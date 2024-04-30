var input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const MAX_N = 100000;
let [[T], ...inputs] = input.map((str) => str.split(" ").map((e) => +e));
let [n, choice, counter] = [undefined, undefined, undefined];
let visited = Array.from({ length: MAX_N }, () => false);
let stack = Array.from({ length: MAX_N }, () => false);

while (T--) {
  [n, counter, choice] = [inputs[0], 0, [undefined, ...inputs[1]]];
  inputs = inputs.slice(2);

  visited.map((e, i) => e && (visited[i] = false));
  stack.map((e, i) => e && (stack[i] = false));

  const DFS = (current) => {
    visited[current] = true;
    let next = choice[current];
    if (!visited[next]) DFS(next);
    else if (!stack[next]) {
      while (next != current) {
        counter++;
        next = choice[next];
      }
      counter++;
    }
    stack[current] = true;
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) DFS(i);
  }

  console.log(n - counter);
}
