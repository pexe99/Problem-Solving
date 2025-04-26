const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const paper = input.slice(1).map((str) => str.split(" ").map(Number));

const getPaperNum = (paper, width, x = 0, y = 0) => {
  let current = 0,
    white = 0,
    blue = 0;
  for (let i = x; i < x + width; i++) {
    for (let j = y; j < y + width; j++) current += paper[i][j];
  }
  if (current === width * width) blue++;
  else if (current === 0) white++;
  else {
    const next = [];
    const half = width / 2;
    next.push(
      getPaperNum(paper, half, x, y),
      getPaperNum(paper, half, x, y + half),
      getPaperNum(paper, half, x + half, y),
      getPaperNum(paper, half, x + half, y + half)
    );
    next.forEach(([nWhite, nBlue]) => {
      white += nWhite;
      blue += nBlue;
    });
  }

  return [white, blue];
};

const result = getPaperNum(paper, N);
result.forEach((n) => console.log(n));
