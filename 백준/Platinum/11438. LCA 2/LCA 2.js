class IO {
  constructor() {
    this.fs = require("fs");

    this.inputOffset = 0;
    this.inputBuffer = this.fs.readFileSync(
      process.platform === "linux" ? 0 : "input.txt"
    );

    this.outputOffset = 0;
    this.outputBuffer = new Uint8Array(12 * 5000000);
  }

  readInteger() {
    let result = 0;

    while (
      this.inputOffset < this.inputBuffer.length &&
      this.inputBuffer[this.inputOffset] <= 32
    ) {
      this.inputOffset++;
    }

    if (this.inputOffset >= this.inputBuffer.length) return null;

    while (
      this.inputOffset < this.inputBuffer.length &&
      this.inputBuffer[this.inputOffset] >= 48 &&
      this.inputBuffer[this.inputOffset] <= 57
    ) {
      result = result * 10 + (this.inputBuffer[this.inputOffset++] - 48);
    }

    return result;
  }

  addOutputBuffer(number) {
    if (number === 0) {
      this.outputBuffer[this.outputOffset++] = 48;
      this.outputBuffer[this.outputOffset++] = 32;
      return;
    }

    let remain = number;
    let started = false;
    let divisor = 1000000000;

    while (divisor > 0) {
      if (number >= divisor || started) {
        const digit = (remain / divisor) | 0;
        this.outputBuffer[this.outputOffset++] = 48 + digit;
        remain %= divisor;
        started = true;
      }
      divisor = (divisor / 10) | 0;
    }

    this.outputBuffer[this.outputOffset++] = 10;
  }

  writeOutputBuffer() {
    this.fs.writeSync(1, this.outputBuffer.subarray(0, this.outputOffset - 1));
  }
}

const query = (LOG, parent, depth, a, b) => {
  if (depth[b] < depth[a]) [a, b] = [b, a];

  for (let k = LOG; k >= 0; k--)
    if ((depth[b] - depth[a]) & (1 << k)) b = parent[k][b];

  if (a === b) return a;

  for (let k = LOG; k >= 0; k--) {
    if (parent[k][a] !== parent[k][b]) {
      a = parent[k][a];
      b = parent[k][b];
    }
  }

  return parent[0][a];
};

const solution = () => {
  const io = new IO();

  const N = io.readInteger();
  const depth = new Int32Array(N + 1).fill(-1);
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let i = 0; i < N - 1; i++) {
    const a = io.readInteger();
    const b = io.readInteger();
    graph[a].push(b);
    graph[b].push(a);
  }

  const LOG = Math.ceil(Math.log2(N));
  const parent = Array.from({ length: LOG + 1 }, () => new Int32Array(N + 1));

  depth[1] = 0;
  let index = 0;
  const queue = [[1, 0]];
  while (index < queue.length) {
    const [curNode, curDepth] = queue[index++];
    graph[curNode].forEach((nextNode) => {
      if (depth[nextNode] === -1) {
        depth[nextNode] = curDepth + 1;
        parent[0][nextNode] = curNode;
        queue.push([nextNode, depth[nextNode]]);
      }
    });
  }

  for (let i = 1; i <= LOG; i++) {
    for (let j = 1; j <= N; j++) parent[i][j] = parent[i - 1][parent[i - 1][j]];
  }

  const M = io.readInteger();
  for (let i = 0; i < M; i++) {
    const a = io.readInteger();
    const b = io.readInteger();
    io.addOutputBuffer(query(LOG, parent, depth, a, b));
  }

  io.writeOutputBuffer();
};

solution();
