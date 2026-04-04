const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .split("\n");

const [[N], ...boards] = input.map((line) => line.split(" ").map(Number));

const DFS = (N, target, index, diag1 = new Set(), diag2 = new Set()) => {
  if (target.length === 0) return 0;
  let current = 0;
  for (let i = index; i < target.length; i++) {
    const r = Math.floor(target[i] / N);
    const c = target[i] % N;
    if (!diag1.has(r - c) && !diag2.has(r + c)) {
      diag1.add(r - c);
      diag2.add(r + c);

      current = Math.max(current, 1 + DFS(N, target, i + 1, diag1, diag2));

      diag1.delete(r - c);
      diag2.delete(r + c);
    }
  }
  return current;
};

const solution = (N, boards) => {
  const white = [];
  const black = [];
  for (let i = 0; i < N * N; i++) {
    const r = Math.floor(i / N);
    const c = i % N;
    if (boards[r][c] === 1) {
      if ((r + c) % 2 === 0) white.push(i);
      else black.push(i);
    }
  }

  return DFS(N, white, 0) + DFS(N, black, 0);
};

console.log(solution(N, boards));
