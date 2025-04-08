const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const n = +input[0];

if (n === 0) {
  console.log(0);
} else {
  const opinions = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  const excludeCount = Math.round(n * 0.15);
  const remainingOpinions = opinions.slice(excludeCount, n - excludeCount);

  if (remainingOpinions.length === 0) {
    console.log(0);
  } else {
    const average =
      remainingOpinions.reduce((sum, opinion) => sum + opinion, 0) /
      remainingOpinions.length;
    console.log(Math.round(average));
  }
}
