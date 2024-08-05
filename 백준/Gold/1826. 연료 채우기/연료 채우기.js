const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);
    while (current > 1 && this.heap[current] > this.heap[parent]) {
      this.swap(current, parent);
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();
    let max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;

    while (true) {
      let left = current * 2;
      let right = current * 2 + 1;
      let large = current;

      if (left < this.heap.length && this.heap[large] < this.heap[left])
        large = left;
      if (right < this.heap.length && this.heap[large] < this.heap[right])
        large = right;
      if (large !== current) {
        this.swap(current, large);
        current = large;
      } else break;
    }

    return max;
  }
}

const N = +input[0];
const gasStations = input
  .slice(1, -1)
  .map((str) => str.split(" ").map((e) => +e))
  .sort((a, b) => b[0] - a[0]);
let [destination, gas] = input
  .slice(-1)
  .at(-1)
  .split(" ")
  .map((e) => +e);

let current = 0;
let result = 0;
const pq = new PriorityQueue();
while (current < destination) {
  if (0 < gas) {
    current += gas;
    gas = 0;
    while (gasStations.at(-1)?.[0] <= current) pq.push(gasStations.pop()[1]);
  } else {
    let nextGas = pq.pop();
    if (nextGas === null) {
      result = -1;
      break;
    } else gas += nextGas;
    result++;
  }
}

console.log(result);
