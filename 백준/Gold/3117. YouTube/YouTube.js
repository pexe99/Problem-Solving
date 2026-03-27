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

    this.outputBuffer[this.outputOffset++] = 32;
  }

  writeOutputBuffer() {
    this.fs.writeSync(1, this.outputBuffer.subarray(0, this.outputOffset - 1));
  }
}

const solution = () => {
  const io = new IO();
  const N = io.readInteger();
  const K = io.readInteger();
  const M = io.readInteger();
  const firstVideoNum = [];
  for (let i = 0; i < N; i++) firstVideoNum.push(io.readInteger());

  const LOG = Math.floor(Math.log2(M - 1));
  const sparseTable = Array.from({ length: LOG + 1 }, () =>
    new Int32Array(K + 1).fill(0)
  );

  for (let i = 1; i <= K; i++) sparseTable[0][i] = io.readInteger();
  for (let k = 1; k <= LOG; k++) {
    for (let i = 1; i <= K; i++)
      sparseTable[k][i] = sparseTable[k - 1][sparseTable[k - 1][i]];
  }

  for (let k = LOG; k >= 0; k--) {
    if ((M - 1) & (1 << k)) {
      for (let i = 0; i < N; i++)
        firstVideoNum[i] = sparseTable[k][firstVideoNum[i]];
    }
  }

  for (let i = 0; i < N; i++) io.addOutputBuffer(firstVideoNum[i]);
  io.writeOutputBuffer();
};

solution();
