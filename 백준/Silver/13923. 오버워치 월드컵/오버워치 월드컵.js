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
      rowMask[i] ^= 1 << (spectators[i][j].charCodeAt(0) - "A".charCodeAt(0));
      colMask[j] ^= 1 << (spectators[i][j].charCodeAt(0) - "A".charCodeAt(0));
    }
  }

  const [teamMask, teamSet] =
    rowMask[0] === rowMask[1]
      ? [rowMask[0], new Set([...spectators[0]])]
      : [rowMask[2], new Set([...spectators[2]])];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (teamMask !== rowMask[i] && teamMask !== colMask[j])
        console.log(
          `${i + 1} ${j + 1} ${
            [...teamSet].filter((e) => !new Set([...spectators[i]]).has(e))[0]
          }`
        );
    }
  }
};

while (input.length) {
  const N = +input.shift();
  solution(N, input.splice(0, N));
}
