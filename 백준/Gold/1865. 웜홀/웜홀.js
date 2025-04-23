const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

let TC = +input.shift();

while (TC--) {
  const [N, M, W] = input.shift().split(" ").map(Number);
  const edges = input.splice(0, M + W).reduce((acc, str, idx) => {
    const [S, E, T] = str.split(" ").map(Number);
    if (idx < M) {
      acc.push([S, E, T]);
      acc.push([E, S, T]);
    } else acc.push([S, E, -T]);
    return acc;
  }, []);

  let flag = false;
  const dist = Array.from({ length: N + 1 }, () => 0);
  dist[1] = 0;
  for (let i = 0; i < N; i++) {
    for (const [S, E, T] of edges) {
      if (dist[S] !== Infinity && dist[E] > dist[S] + T) {
        dist[E] = dist[S] + T;
        if (i === N - 1) flag = true;
      }
    }
  }

  console.log(flag ? "YES" : "NO");
}
