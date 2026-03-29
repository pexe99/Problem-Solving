const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

const [[N, M], ...problems] = input.map((line) => line.split(" ").map(Number));

class Heap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0] || undefined;
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  getParentIndex(index) {
    return (index - 1) >> 1;
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    const size = this.size();
    if (size === 0) return undefined;
    else if (size === 1) return this.heap.pop();
    else {
      const rootNode = this.peek();
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return rootNode;
    }
  }

  heapifyUp() {
    let index = this.size() - 1;
    let parent = this.getParentIndex(index);
    while (0 <= parent && this.heap[index] < this.heap[parent]) {
      this.swap(index, parent);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    const size = this.size();
    while (index < size) {
      let next = index;
      const leftChild = this.getLeftChildIndex(index);
      const rightChild = this.getRightChildIndex(index);
      if (leftChild < size && this.heap[leftChild] < this.heap[next])
        next = leftChild;
      if (rightChild < size && this.heap[rightChild] < this.heap[next])
        next = rightChild;
      if (index === next) break;
      this.swap(index, next);
      index = next;
    }
  }
}

const solution = (N, M, problems) => {
  const result = [];
  const pq = new Heap();
  const graph = Array.from({ length: N + 1 }, (_, index) =>
    index ? new Array() : null
  );
  const inDegree = Array.from({ length: N + 1 }, (_, index) =>
    index ? 0 : null
  );

  problems.forEach(([A, B]) => {
    graph[A].push(B);
    inDegree[B]++;
  });

  inDegree.forEach((degree, index) => degree === 0 && pq.push(index));

  while (pq.size()) {
    const curNode = pq.pop();
    result.push(curNode);
    if (graph[curNode].length)
      graph[curNode].forEach((next) => {
        inDegree[next]--;
        inDegree[next] === 0 && pq.push(next);
      });
  }

  return result.join(" ");
};

console.log(solution(N, M, problems));
