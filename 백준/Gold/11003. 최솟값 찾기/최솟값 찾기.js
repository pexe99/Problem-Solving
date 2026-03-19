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
    let isMinus = false;

    while (
      this.inputOffset < this.inputBuffer.length &&
      this.inputBuffer[this.inputOffset] <= 32
    )
      this.inputOffset++;

    if (this.inputOffset >= this.inputBuffer.length) return null;

    if (this.inputBuffer[this.inputOffset] === 45) {
      isMinus = true;
      this.inputOffset++;
    }

    while (
      this.inputOffset < this.inputBuffer.length &&
      this.inputBuffer[this.inputOffset] > 32
    )
      result = result * 10 + (this.inputBuffer[this.inputOffset++] - 48);

    return isMinus ? -result : result;
  }

  addOutputBuffer(num) {
    let v = num;

    if (v < 0) {
      this.outputBuffer[this.outputOffset++] = 45;
      v = -v;
    }

    let r = v;

    if (v >= 1000000000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 1000000000) | 0);
      r %= 1000000000;
    }
    if (v >= 100000000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 100000000) | 0);
      r %= 100000000;
    }
    if (v >= 10000000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 10000000) | 0);
      r %= 10000000;
    }
    if (v >= 1000000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 1000000) | 0);
      r %= 1000000;
    }
    if (v >= 100000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 100000) | 0);
      r %= 100000;
    }
    if (v >= 10000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 10000) | 0);
      r %= 10000;
    }
    if (v >= 1000) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 1000) | 0);
      r %= 1000;
    }
    if (v >= 100) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 100) | 0);
      r %= 100;
    }
    if (v >= 10) {
      this.outputBuffer[this.outputOffset++] = 48 + ((r / 10) | 0);
      r %= 10;
    }

    this.outputBuffer[this.outputOffset++] = 48 + r;
    this.outputBuffer[this.outputOffset++] = 32;
  }

  writeOutputBuffer() {
    this.fs.writeSync(1, this.outputBuffer.subarray(0, this.outputOffset - 1));
  }
}

const solution = () => {
  const io = new IO();
  const N = io.readInteger();
  const L = io.readInteger();
  const index = new Int32Array(N);
  const value = new Int32Array(N);

  let head = 0;
  let tail = 0;
  let result = "";

  for (let i = 0; i < N; i++) {
    const current = io.readInteger();
    while (head < tail && current < value[tail - 1]) tail--;
    index[tail] = i;
    value[tail++] = current;
    while (head < tail && index[head] < i - L + 1) head++;
    io.addOutputBuffer(value[head]);
  }

  io.writeOutputBuffer();
};

solution();
