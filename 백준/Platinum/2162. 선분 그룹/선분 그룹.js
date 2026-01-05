const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...coordinates] = input.map((e) => e.split(" ").map(Number));

const CCW = (ax, ay, bx, by, cx, cy) => {
  const result = ax * by + bx * cy + cx * ay - (ay * bx + by * cx + cy * ax);
  if (result < 0) return -1;
  else if (result === 0) return 0;
  else return 1;
};

const isCross = (line1, line2) => {
  const [ax, ay, bx, by] = line1;
  const [cx, cy, dx, dy] = line2;
  if (
    CCW(ax, ay, bx, by, cx, cy) * CCW(ax, ay, bx, by, dx, dy) <= 0 &&
    CCW(cx, cy, dx, dy, ax, ay) * CCW(cx, cy, dx, dy, bx, by) <= 0
  ) {
    if (
      (Math.max(cx, dx) < ax && Math.max(cx, dx) < bx) ||
      (Math.min(cx, dx) > ax && Math.min(cx, dx) > bx) ||
      (Math.max(cy, dy) < ay && Math.max(cy, dy) < by) ||
      (Math.min(cy, dy) > ay && Math.min(cy, dy) > by)
    )
      return false;
    else return true;
  }
  return false;
};

const solution = (N, coordinates) => {
  const graph = Array.from({ length: N }, () => []);

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (isCross(coordinates[i], coordinates[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  const visited = Array.from({ length: N }, () => false);
  const BFS = (start) => {
    if (visited[start] === true) return 0;

    const queue = [start];
    visited[start] = true;
    let index = 0;
    while (index < queue.length) {
      const current = queue[index++];
      graph[current].forEach((next) => {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
    }

    return queue.length;
  };

  let [counter, maximum] = [0, 0];
  for (let i = 0; i < N; i++) {
    const current = BFS(i);
    if (current) {
      counter++;
      maximum = Math.max(maximum, current);
    }
  }

  return `${counter}\n${maximum}`;
};

console.log(solution(N, coordinates));