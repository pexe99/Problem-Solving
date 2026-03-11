const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, original, ...words] = input;

const getAlphabetCount = (word) => {
  const result = new Array(26).fill(0);
  [...word].forEach((char) => result[char.charCodeAt(0) - 65]++);
  return result;
};

const getDiffAlphabetCount = (count1, count2) => {
  return count1.reduce((acc, cur, idx) => acc + Math.abs(cur - count2[idx]), 0);
};

const solution = (N, original, words) => {
  const originalCount = getAlphabetCount(original);
  return words.filter((word) => {
    const diff = getDiffAlphabetCount(originalCount, getAlphabetCount(word));
    if (original.length === word.length) return diff === 0 || diff === 2;
    else if (Math.abs(original.length - word.length) === 1) return diff === 1;
    else return false;
  }).length;
};

console.log(solution(N, original, words));
