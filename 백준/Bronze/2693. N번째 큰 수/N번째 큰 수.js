const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

input.slice(1).map((arr) => {
  const current = arr
    .split(" ")
    .map((e) => +e)
    .sort((a, b) => b - a);
  console.log(current[2]);
});
