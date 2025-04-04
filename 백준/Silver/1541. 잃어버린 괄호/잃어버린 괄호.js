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

const expression = input[0] + "-0";

const result = expression.split("-").reduce((acc, str, idx) => {
  const current = str.split("+").reduce((res, cur) => +res + +cur);
  return idx === 0 ? current : acc - current;
}, 0);

console.log(result);
