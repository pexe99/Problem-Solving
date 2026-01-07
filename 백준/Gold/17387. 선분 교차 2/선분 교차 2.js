const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [L1, L2] = input.map((e) => e.split(" ").map(Number));

const CCW = (ax, ay, bx, by, cx, cy) => {
  const z = ax * by + bx * cy + cx * ay - (ay * bx + by * cx + cy * ax);
  return Math.sign(z);
};

const bboxOverlap = (L1, L2) => {
  const [ax, ay, bx, by] = L1;
  const [cx, cy, dx, dy] = L2;

  return !(
    Math.max(ax, bx) < Math.min(cx, dx) ||
    Math.max(ay, by) < Math.min(cy, dy) ||
    Math.min(ax, bx) > Math.max(cx, dx) ||
    Math.min(ay, by) > Math.max(cy, dy)
  );
};

const isCross = (L1, L2) => {
  const [ax, ay, bx, by] = L1;
  const [cx, cy, dx, dy] = L2;

  const ab_c = CCW(ax, ay, bx, by, cx, cy);
  const ab_d = CCW(ax, ay, bx, by, dx, dy);
  const cd_a = CCW(cx, cy, dx, dy, ax, ay);
  const cd_b = CCW(cx, cy, dx, dy, bx, by);

  if (ab_c * ab_d > 0 || cd_a * cd_b > 0) return false;
  return bboxOverlap(L1, L2);
};

const solution = (L1, L2) => +isCross(L1, L2);

console.log(solution(L1, L2));
