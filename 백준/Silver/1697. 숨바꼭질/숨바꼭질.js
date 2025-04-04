const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

class Deque {
  constructor(element) {
    this.instack = [element];
    this.outstack = [];
  }

  get length() {
    return this.instack.length + this.outstack.length;
  }

  push(element) {
    this.instack.push(element);
  }

  shift() {
    if (!this.outstack.length) {
      while (this.instack.length) this.outstack.push(this.instack.pop());
    }
    return this.outstack.pop();
  }
}

const MAXIMUM = 100000;
const [N, K] = input[0].split(" ").map(Number);

const visited = new Array(MAXIMUM + 1).fill(false);
const deque = new Deque([N, 0]);
visited[N] = true;

while (deque.length) {
  const [current, time] = deque.shift();

  if (current === K) {
    console.log(time);
    break;
  }

  for (const next of [current - 1, current + 1, current * 2]) {
    if (next >= 0 && next <= MAXIMUM && !visited[next]) {
      visited[next] = true;
      deque.push([next, time + 1]);
    }
  }
}
