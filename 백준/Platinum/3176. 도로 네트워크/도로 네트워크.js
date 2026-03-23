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
  }

  addSpace() {
    this.outputBuffer[this.outputOffset++] = 32;
  }

  addNewLine() {
    this.outputBuffer[this.outputOffset++] = 10;
  }

  writeOutputBuffer() {
    this.fs.writeSync(1, this.outputBuffer.subarray(0, this.outputOffset - 1));
  }
}

const io = new IO();
const N = io.readInteger();
const LOG = Math.ceil(Math.log2(N + 1));

const depth = new Int32Array(N + 1).fill(-1);
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < N - 1; i++) {
  const A = io.readInteger();
  const B = io.readInteger();
  const distance = io.readInteger();
  graph[A].push([B, distance]);
  graph[B].push([A, distance]);
}

const parent = Array.from({ length: N + 1 }, () =>
  new Int32Array(LOG + 1).fill(0)
);
const minRoad = Array.from({ length: N + 1 }, () =>
  new Int32Array(LOG + 1).fill(Infinity)
);
const maxRoad = Array.from({ length: N + 1 }, () =>
  new Int32Array(LOG + 1).fill(0)
);

depth[1] = 0;
let index = 0;
const queue = [[1, 0]];
while (index < queue.length) {
  const [curNode, curDepth] = queue[index++];
  graph[curNode].forEach(([nextNode, nextDist]) => {
    if (depth[nextNode] === -1) {
      depth[nextNode] = curDepth + 1;
      parent[nextNode][0] = curNode;
      minRoad[nextNode][0] = nextDist;
      maxRoad[nextNode][0] = nextDist;
      queue.push([nextNode, depth[nextNode]]);
    }
  });
}

for (let k = 1; k <= LOG; k++) {
  for (let node = 1; node <= N; node++) {
    parent[node][k] = parent[parent[node][k - 1]][k - 1];
    minRoad[node][k] = Math.min(
      minRoad[node][k - 1],
      minRoad[parent[node][k - 1]][k - 1]
    );
    maxRoad[node][k] = Math.max(
      maxRoad[node][k - 1],
      maxRoad[parent[node][k - 1]][k - 1]
    );
  }
}

const query = (a, b) => {
  let min = Infinity;
  let max = 0;

  if (depth[b] < depth[a]) [a, b] = [b, a];
  for (let k = LOG; k >= 0; k--) {
    if ((depth[b] - depth[a]) & (1 << k)) {
      min = Math.min(min, minRoad[b][k]);
      max = Math.max(max, maxRoad[b][k]);
      b = parent[b][k];
    }
  }

  if (a === b) return [min, max];

  for (let k = LOG; k >= 0; k--) {
    if (parent[a][k] !== parent[b][k]) {
      min = Math.min(min, minRoad[a][k], minRoad[b][k]);
      max = Math.max(max, maxRoad[a][k], maxRoad[b][k]);
      a = parent[a][k];
      b = parent[b][k];
    }
  }

  min = Math.min(min, minRoad[a][0], minRoad[b][0]);
  max = Math.max(max, maxRoad[a][0], maxRoad[b][0]);
  return [min, max];
};

const K = io.readInteger();
for (let i = 0; i < K; i++) {
  const D = io.readInteger();
  const E = io.readInteger();
  const [min, max] = query(D, E);
  io.addOutputBuffer(min);
  io.addSpace();
  io.addOutputBuffer(max);
  io.addNewLine();
}

io.writeOutputBuffer();
