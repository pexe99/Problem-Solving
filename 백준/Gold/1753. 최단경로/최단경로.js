const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[V, E], [K], ...edges] = input.map((str) => str.split(" ").map(Number));

class Node {
  constructor(index, distance) {
    this.index = index;
    this.distance = distance;
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

  push(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (
      parent !== 0 &&
      this.compare(this.heap[current], this.heap[parent])
    ) {
      this._swap(parent, current);
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

const dajikstra = (start, graph) => {
  const priorityQueue = new Heap((a, b) => a.distance < b.distance);
  const distance = Array.from({ length: graph.length }, (_, index) =>
    index === start ? 0 : Infinity
  );

  priorityQueue.push(new Node(start, 0));
  while (priorityQueue.size()) {
    const curNode = priorityQueue.pop();
    if (curNode.distance > distance[curNode.index]) continue;
    graph[curNode.index].forEach(([next, weight]) => {
      const newDistance = curNode.distance + weight;
      if (newDistance < distance[next]) {
        distance[next] = newDistance;
        priorityQueue.push(new Node(next, newDistance));
      }
    });
  }

  return distance;
};

const solution = (V, E, K, edges) => {
  const graph = Array.from({ length: V }, () => []);
  edges.forEach(([from, to, weight]) => {
    graph[from - 1].push([to - 1, weight]);
  });

  return dajikstra(K - 1, graph)
    .map((distance) => (distance === Infinity ? "INF" : distance))
    .join("\n");
};

console.log(solution(V, E, K, edges));
