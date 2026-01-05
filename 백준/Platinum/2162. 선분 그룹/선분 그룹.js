const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], ...lines] = input.map((e) => e.split(" ").map(Number));

const CCW = (ax, ay, bx, by, cx, cy) => {
  const z = ax * by + bx * cy + cx * ay - (ay * bx + by * cx + cy * ax);
  return z > 0 ? 1 : z === 0 ? 0 : -1;
};

const bboxOverlap = (l1, l2) => {
  const [ax, ay, bx, by] = l1;
  const [cx, cy, dx, dy] = l2;

  return !(
    Math.max(ax, bx) < Math.min(cx, dx) ||
    Math.max(cx, dx) < Math.min(ax, bx) ||
    Math.max(ay, by) < Math.min(cy, dy) ||
    Math.max(cy, dy) < Math.min(ay, by)
  );
};

const isCross = (l1, l2) => {
  const [ax, ay, bx, by] = l1;
  const [cx, cy, dx, dy] = l2;

  const ab_c = CCW(ax, ay, bx, by, cx, cy);
  const ab_d = CCW(ax, ay, bx, by, dx, dy);
  const cd_a = CCW(cx, cy, dx, dy, ax, ay);
  const cd_b = CCW(cx, cy, dx, dy, bx, by);

  if (ab_c * ab_d > 0 || cd_a * cd_b > 0) return false;
  return bboxOverlap(l1, l2);
};

const solution = (N, lines) => {
  const root = Array.from({ length: N }, (_, i) => i);
  const find = (x) => (x === root[x] ? x : (root[x] = find(root[x])));

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (isCross(lines[i], lines[j])) {
        const rootA = find(i);
        const rootB = find(j);

        if (rootA !== rootB) root[rootB] = rootA;
      }
    }
  }

  const components = {};
  for (let i = 0; i < N; i++) {
    const current = find(i);
    components[current] = (components[current] || 0) + 1;
  }

  return `${Object.keys(components).length}\n${Math.max(
    ...Object.values(components)
  )}`;
};

console.log(solution(N, lines));
