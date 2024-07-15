const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, k] = input[0].split(" ").map((e) => +e);
let result = [],
  binary = ["0"],
  current = 1;
while (result.length < 5) {
  if (binary.length <= result.length * n + k - 1)
    binary.push(...(current++).toString(2));
  else result.push(binary[result.length * n + k - 1]);
}

console.log(result.join(" "));
