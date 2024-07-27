const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

let [[N, K], array] = input.map((str) => str.split(" ").map((e) => +e));

const merge = (p, q, r) => {
  let [i, j, t] = [p, q + 1, 0];
  let temp = Array.from({ length: r - p + 1 }, () => 0);
  while (i <= q && j <= r) {
    if (array[i] <= array[j]) temp[t++] = array[i++];
    else temp[t++] = array[j++];
  }
  while (i <= q) temp[t++] = array[i++];
  while (j <= r) temp[t++] = array[j++];

  for (let k = 0; k < temp.length; k++) {
    array[p + k] = temp[k];
    if (--K === 0) {
      console.log(array.join(" "));
      process.exit(0);
    }
  }
};

const merge_sort = (p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(p, q);
    merge_sort(q + 1, r);
    merge(p, q, r);
  }
};

merge_sort(0, array.length - 1);
console.log(-1);
