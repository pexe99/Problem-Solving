const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, original, ...words] = input;

const solution = (N, original, words) => {
  const originalCounter = {};
  [...original].forEach(
    (char) => (originalCounter[char] = (originalCounter[char] || 0) + 1)
  );

  return words.filter((word) => {
    let diff = 0;
    if (word.length < original.length)
      word += "*".repeat(original.length - word.length);
    const currentCounter = { ...originalCounter };
    [...word].forEach((char) => {
      if (currentCounter.hasOwnProperty(char)) {
        if (currentCounter[char] === 1) delete currentCounter[char];
        else currentCounter[char]--;
      } else diff++;
    });
    return diff <= 1;
  }).length;
};

console.log(solution(N, original, words));
