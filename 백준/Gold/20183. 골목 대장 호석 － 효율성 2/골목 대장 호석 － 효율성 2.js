const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0] || null;
  }

  clear() {
    this.heap = [];
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

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  pop = () => {
    const size = this.size();
    if (size === 0) return undefined;
    else if (size === 1) return this.heap.pop();
    else {
      const rootNode = this.peek();
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return rootNode;
    }
  };

  heapifyUp = () => {
    let current = this.size() - 1;
    let parent = this.getParentIndex(current);
    while (0 < current && this.heap[current][1] < this.heap[parent][1]) {
      this.swap(current, parent);
      current = parent;
      parent = this.getParentIndex(current);
    }
  };

  heapifyDown = () => {
    let current = 0;
    const size = this.size();
    while (current < size) {
      const leftChild = this.getLeftChildIndex(current);
      const rightChild = this.getRightChildIndex(current);
      let next = current;
      if (leftChild < size && this.heap[leftChild][1] < this.heap[next][1])
        next = leftChild;
      if (rightChild < size && this.heap[rightChild][1] < this.heap[next][1])
        next = rightChild;
      if (current === next) break;
      this.swap(current, next);
      current = next;
    }
  };
}

const [[N, M, A, B, C], ...path] = input.map((line) =>
  line.split(" ").map(Number)
);

const djikstra = (N, pq, graph, start, target, limit) => {
  const distance = new Array(N + 1).fill(Infinity);
  distance[start] = 0;
  pq.clear();
  pq.push([start, 0]);

  while (pq.size()) {
    const [curNode, curDist] = pq.pop();
    if (curNode === target) return curDist;
    if (curDist > distance[curNode]) continue;
    for (const [nextNode, dist] of graph[curNode]) {
      const nextDist = curDist + dist;

      if (dist <= limit && nextDist < distance[nextNode]) {
        distance[nextNode] = nextDist;
        pq.push([nextNode, nextDist]);
      }
    }
  }

  return distance[target];
};

const solution = (N, M, A, B, C, path) => {
  let costs = new Set();
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [from, to, charge] of path) {
    costs.add(charge);
    graph[from].push([to, charge]);
    graph[to].push([from, charge]);
  }

  let result = Infinity;
  const pq = new Heap();
  costs = [...costs].sort((a, b) => a - b);
  let [head, mid, tail] = [0, 0, costs.length - 1];

  while (head <= tail) {
    mid = (head + tail) >> 1;
    if (djikstra(N, pq, graph, A, B, costs[mid]) <= C) {
      tail = mid - 1;
      result = Math.min(result, costs[mid]);
    } else head = mid + 1;
  }

  return result === Infinity ? -1 : result;
};

console.log(solution(N, M, A, B, C, path));
