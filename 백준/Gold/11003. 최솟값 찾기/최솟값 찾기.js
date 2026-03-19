const fs = require("fs");

class IO {
  constructor() {
    this.offset = 0;
    this.fs = require("fs");
    this.inputBuffer = fs.readFileSync(
      process.platform === "linux" ? 0 : "input.txt"
    );
    this.outputBuffer = "";
  }

  readInteger() {
    let result = 0;
    let isMinus = false;

    while (
      this.offset < this.inputBuffer.length &&
      this.inputBuffer[this.offset] <= 32
    )
      this.offset++;
    if (this.inputBuffer.length <= this.offset) return null;

    if (this.inputBuffer[this.offset] === 45) {
      isMinus = true;
      this.offset++;
    }

    while (
      this.offset < this.inputBuffer.length &&
      32 < this.inputBuffer[this.offset]
    )
      result = result * 10 + (this.inputBuffer[this.offset++] - 48);

    return isMinus ? -result : result;
  }

  addOutputBuffer(string) {
    this.outputBuffer += string + " ";
    if (this.outputBuffer.length % 10000 === 0) {
      process.stdout.write(this.outputBuffer);
      this.outputBuffer = "";
    }
  }

  writeOutputBuffer() {
    process.stdout.write(this.outputBuffer.trimEnd());
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
