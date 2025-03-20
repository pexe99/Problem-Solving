const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const name = input[0];
const team = input.slice(2).sort();

const nCount = {};
[...name].forEach((char) => (nCount[char] = (nCount[char] || 0) + 1));

const result = team
  .map((cur) => {
    const tCount = {};
    [...cur].forEach((char) => (tCount[char] = (tCount[char] || 0) + 1));
    const L = (nCount["L"] || 0) + (tCount["L"] || 0);
    const O = (nCount["O"] || 0) + (tCount["O"] || 0);
    const V = (nCount["V"] || 0) + (tCount["V"] || 0);
    const E = (nCount["E"] || 0) + (tCount["E"] || 0);
    const score =
      ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
    return [cur, score];
  })
  .sort((a, b) => b[1] - a[1]);

console.log(result[0][0]);
