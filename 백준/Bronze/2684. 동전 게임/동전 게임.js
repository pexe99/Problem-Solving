const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const cases = ["TTT", "TTH", "THT", "THH", "HTT", "HTH", "HHT", "HHH"];

input.slice(1).forEach((str) => {
  const result = new Map();
  cases.forEach((c) => result.set(c, 0));

  for (let i = 0; i <= str.length - 3; i++) {
    const key = str.substring(i, i + 3);
    result.set(key, result.get(key) + 1);
  }

  console.log(cases.map((key) => result.get(key)).join(" "));
});
