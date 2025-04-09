const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let [T] = input.splice(0, 1);
while (T--) {
  const [M, N, K] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((e) => +e);
  const farm = Array.from({ length: M }, () => {
    return Array.from({ length: N }, () => false);
  });
  const cabbage = input.splice(0, K).map((str) => {
    const [i, j] = str.split(" ").map((e) => +e);
    farm[i][j] = true;
    return [i, j];
  });

  const DFS = (i, j) => {
    farm[i][j] = false;
    DIRECTION.forEach(([dx, dy]) => {
      const [nx, ny] = [i + dx, j + dy];
      if (farm[nx] && farm[nx][ny]) {
        DFS(nx, ny);
      }
    });
  };

  let worm = 0;
  cabbage.forEach(([i, j]) => {
    if (farm[i][j]) {
      worm++;
      DFS(i, j);
    }
  });

  console.log(worm);
}
