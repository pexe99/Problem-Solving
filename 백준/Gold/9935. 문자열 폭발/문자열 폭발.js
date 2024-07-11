const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [string, bomb] = input.map((str) => str);
let stack = [];
[...string].forEach((e) => {
  stack.push(e);
  if (
    bomb.length <= stack.length &&
    stack.slice(-bomb.length).join("") === bomb
  ) {
    stack.splice(-bomb.length, bomb.length);
  }
});

console.log(stack.join("") || "FRULA");
