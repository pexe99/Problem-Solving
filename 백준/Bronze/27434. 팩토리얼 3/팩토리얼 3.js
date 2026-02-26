const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  get size() {
    return this.heap.length;
  }

  peek = () => this.heap[0];
  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  swap = (index1, index2) =>
    ([this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]);

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    const count = this.size;
    const rootNode = this.peek();

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyUp() {
    let index = this.size - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.comparator(this.heap[index], this.heap[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else break;
    }
  }

  heapifyDown() {
    let index = 0;
    const count = this.size;
    while (index < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let nextIndex = index;

      if (
        leftChildIndex < count &&
        this.comparator(this.heap[leftChildIndex], this.heap[nextIndex])
      ) {
        nextIndex = leftChildIndex;
      }
      if (
        rightChildIndex < count &&
        this.comparator(this.heap[rightChildIndex], this.heap[nextIndex])
      ) {
        nextIndex = rightChildIndex;
      }
      if (nextIndex === index) break;
      this.swap(index, nextIndex);
      index = nextIndex;
    }
  }
}

class PriorityQueue extends Heap {
  constructor() {
    super((a, b) => a < b);
  }

  enqueue(value) {
    this.insert(value);
  }

  dequeue() {
    return this.remove();
  }
}

const factorial = (number) => {
  const heap = new PriorityQueue();
  for (let i = 0; i <= number; i++) heap.enqueue(BigInt(i === 0 ? 1 : i));
  while (heap.size > 1) heap.enqueue(heap.dequeue() * heap.dequeue());
  return heap.dequeue().toString();
};

console.log(factorial(Number(input[0])));
