const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

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

  push(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);
    while (
      parent !== 0 &&
      this.compare(this.heap[current], this.heap[parent])
    ) {
      this._swap(current, parent);
      current = parent;
      parent = Math.floor(current / 2);
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
      this._swap(current, target);
      current = target;
    }

    return root;
  }
}

const getShortPath = (start, end, graph) => {
  const path = [end];
  const parents = new Array(graph.length).fill(null);
  const priorityQueue = new Heap((a, b) => a[1] < b[1]);
  const distance = Array.from({ length: graph.length }, (_, index) =>
    index === start ? 0 : Infinity
  );

  priorityQueue.push([start, 0]);
  while (priorityQueue.size()) {
    const [current, currentDistance] = priorityQueue.pop();
    if (currentDistance > distance[current]) continue;
    graph[current].forEach(([next, weight]) => {
      const newDistance = currentDistance + weight;
      if (newDistance < distance[next]) {
        distance[next] = newDistance;
        parents[next] = current;
        priorityQueue.push([next, newDistance]);
      }
    });
  }

  let iter = end;
  while (parents[iter] !== null) {
    path.push(parents[iter]);
    iter = parents[iter];
  }

  return [distance[end], path.map((e) => e + 1).reverse()];
};

const solution = (input) => {
  const N = +input.shift();
  const M = +input.shift();
  const [start, end] = input.pop().split(" ").map(Number);
  const buses = input.map((string) => string.split(" ").map(Number));

  const graph = Array.from({ length: N }, () => []);
  buses.forEach(([from, to, weight]) => {
    graph[from - 1].push([to - 1, weight]);
  });

  const [distance, path] = getShortPath(start - 1, end - 1, graph);
  return `${distance}\n${path.length}\n${path.join(" ")}`;
};

console.log(solution(input));
