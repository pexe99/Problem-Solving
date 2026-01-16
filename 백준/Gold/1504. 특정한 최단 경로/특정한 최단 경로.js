const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1, M + 1).map((e) => e.split(" ").map(Number));
const [v1, v2] = input[input.length - 1].split(" ").map(Number);

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
    const size = this.heap.length;

    let current = 1;
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

const dijikstra = (start, graph) => {
  const distance = new Array(graph.length).fill(Infinity);
  const pq = new Heap((a, b) => a[1] < b[1]);
  distance[start] = 0;
  pq.push([start, 0]);

  while (pq.size()) {
    const [current, curDistance] = pq.pop();
    if (curDistance > distance[current]) continue;
    graph[current].forEach(([next, weight]) => {
      const nextDistance = curDistance + weight;
      if (nextDistance < distance[next]) {
        pq.push([next, nextDistance]);
        distance[next] = nextDistance;
      }
    });
  }
  return distance;
};

const solution = (N, M, edges, v1, v2) => {
  const graph = Array.from({ length: N }, () => []);
  edges.forEach(([node1, node2, weight]) => {
    graph[node1 - 1].push([node2 - 1, weight]);
    graph[node2 - 1].push([node1 - 1, weight]);
  });

  const fromStart = dijikstra(0, graph);
  const fromV1 = dijikstra(v1 - 1, graph);
  const fromV2 = dijikstra(v2 - 1, graph);

  const result = Math.min(
    fromStart[v1 - 1] + fromV1[v2 - 1] + fromV2[N - 1],
    fromStart[v2 - 1] + fromV2[v1 - 1] + fromV1[N - 1]
  );
  return result === Infinity ? -1 : result;
};

console.log(solution(N, M, edges, v1, v2));
