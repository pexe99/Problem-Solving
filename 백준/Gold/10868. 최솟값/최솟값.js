const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf-8")
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const array = input.splice(0, N).map(Number);
const queries = input.map((line) => line.split(" ").map(Number));

class SparseTable {
  constructor(array) {
    this.N = array.length;
    this.LOG = Math.floor(Math.log2(N)) + 1;
    this.dp = Array.from({ length: this.LOG }, () => new Array(this.N).fill(0));

    this.build(array);
  }

  build(array) {
    for (let i = 0; i < this.N; i++) this.dp[0][i] = array[i];

    for (let k = 1; k < this.LOG; k++) {
      for (let i = 0; i + 2 ** k <= this.N; i++)
        this.dp[k][i] = Math.min(
          this.dp[k - 1][i],
          this.dp[k - 1][i + 2 ** (k - 1)]
        );
    }
  }

  query(a, b) {
    const k = Math.floor(Math.log2(b - a + 1));
    return Math.min(this.dp[k][a], this.dp[k][b - (1 << k) + 1]);
  }
}

const solution = (N, M, array, queries) => {
  const sparseTable = new SparseTable(array);
  queries.forEach(([a, b]) => console.log(sparseTable.query(a - 1, b - 1)));
};

solution(N, M, array, queries);
