const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

input.slice(1).forEach((str) => {
  const [num1, num2] = str.split(" ").map((str) => BigInt("0b" + str));
  console.log((num1 + num2).toString(2));
});
