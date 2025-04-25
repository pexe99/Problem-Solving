const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, r, c] = input[0].split(" ").map(Number);

const getIndex = (x, y, w, v, r, c) => {
  if (w === 1) {
    console.log(v);
  } else {
    const half = w / 2;
    const increase = Math.pow(half, 2);
    if (r < x + half) {
      if (c < y + half) getIndex(x, y, half, v, r, c);
      else getIndex(x, y + half, half, v + increase, r, c);
    } else {
      if (c < y + half) getIndex(x + half, y, half, v + increase * 2, r, c);
      else getIndex(x + half, y + half, half, v + increase * 3, r, c);
    }
  }
};

getIndex(0, 0, Math.pow(2, N), 0, r, c);
