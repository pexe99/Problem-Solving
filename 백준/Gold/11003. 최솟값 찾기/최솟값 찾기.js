const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[N, L], A] = input.map((line) => line.split(" ").map(Number));

class Node {
  constructor(value, index) {
    this.value = value;
    this.index = index;
  }
}

class Heap {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }

  peek() {
    return this.size() === 0 ? undefined : this.heap[1];
  }

  push(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = current >> 1;

    while (
      parent !== 0 &&
      this.compare(this.heap[current], this.heap[parent])
    ) {
      this._swap(current, parent);
      current = parent;
      parent = current >> 1;
    }
  }

  pop() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    const root = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    const size = this.heap.length;

    while (true) {
      let [target, left, right] = [current, current * 2, current * 2 + 1];
      if (left < size && this.compare(this.heap[left], this.heap[target]))
        target = left;
      if (right < size && this.compare(this.heap[right], this.heap[target]))
        target = right;
      if (target === current) break;
      this._swap(target, current);
      current = target;
    }
    return root;
  }
}

const solution = (N, L, A) => {
  let result = "";
  const pq = new Heap((nodeA, nodeB) => nodeA.value < nodeB.value);

  A.forEach((value, index) => {
    pq.push(new Node(value, index));
    while (true) {
      if (pq.peek().index < index - L + 1) pq.pop();
      else {
        result += pq.peek().value + " ";
        break;
      }
    }
    if (result.length % 10000 === 0) {
      process.stdout.write(result);
      result = "";
    }
  });

  process.stdout.write(result.trimEnd());
};

solution(N, L, A);
