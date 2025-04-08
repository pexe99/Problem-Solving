const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [A, B, C] = input.map((e) => +e);
console.log(A + B - C);
console.log(+`${A}${B}` - C);
