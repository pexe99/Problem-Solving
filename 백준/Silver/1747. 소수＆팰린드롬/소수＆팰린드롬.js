const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const n = +input[0];
const LIMIT = 10 ** 7;

function isPalindrome(num) {
  const str = String(num);
  return str === str.split("").reverse().join("");
}

function getNextSpecialPrime(start) {
  const isPrime = Array(LIMIT).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < LIMIT; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < LIMIT; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = start; i < LIMIT; i++) {
    if (isPrime[i] && isPalindrome(i)) {
      return i;
    }
  }

  return -1;
}

console.log(getNextSpecialPrime(n));
