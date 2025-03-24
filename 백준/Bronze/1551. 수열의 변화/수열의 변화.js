const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map((e) => +e);
let array = input[1].split(",").map((e) => +e);

while (K--) {
  array = array.map((cur, idx, arr) => arr[idx + 1] - cur);
  array.pop();
}

console.log(array.join(","));
