const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [[N, M], ...immigrations] = input.map((str, idx) =>
  !idx ? str.split(" ").map((e) => +e) : +str
);

const binarySearch = (start, end) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    let available = 0;
    for (let i = 0; i < immigrations.length; i++) {
      available += Math.floor(mid / immigrations[i]);
      if (available > M) break;
    }
    if (end === mid) break;
    if (available >= M) end = mid;
    else start = mid + 1;
  }
  return end;
};

console.log(binarySearch(1, Math.min(...immigrations) * M));
