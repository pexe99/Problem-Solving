const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const solution = (N, spectators) => {
  const rowMask = new Array(N).fill(0);
  const colMask = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const bit = 1 << (spectators[i][j].charCodeAt(0) - 65);
      rowMask[i] ^= bit;
      colMask[j] ^= bit;
    }
  }

  const teamMask = rowMask[0] === rowMask[1] ? rowMask[0] : rowMask[2];

  for (let i = 0; i < N; i++) {
    if (rowMask[i] === teamMask) continue;
    for (let j = 0; j < N; j++) {
      if (colMask[j] !== teamMask) {
        const missingBit =
          teamMask ^ (rowMask[i] ^ (1 << (spectators[i][j].charCodeAt(0) - 65)));
        const teamChar = String.fromCharCode(65 + Math.log2(missingBit));
        console.log(`${i + 1} ${j + 1} ${teamChar}`);
      }
    }
  }
};

while (input.length) {
  const N = +input.shift();
  solution(N, input.splice(0, N));
}
