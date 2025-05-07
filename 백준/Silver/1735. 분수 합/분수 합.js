const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [a, b] = input.map((str) => str.split(" ").map(Number));

const getGCD = (a, b) => {
  if (b === 0) return a;
  return getGCD(b, a % b);
};

const denominator = (a[1] * b[1]) / getGCD(a[1], b[1]);
const numerator = a[0] * (denominator / a[1]) + b[0] * (denominator / b[1]);

const gcd = getGCD(numerator, denominator);
console.log(`${numerator / gcd} ${denominator / gcd}`);
