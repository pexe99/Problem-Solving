const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [N, RNA] = input;
console.log(
  [...RNA].reverse().reduce((acc, cur, idx) => {
    if (idx === 0) return cur;
    return {
      AA: "A",
      AG: "C",
      AC: "A",
      AT: "G",
      GA: "C",
      GG: "G",
      GC: "T",
      GT: "A",
      CA: "A",
      CG: "T",
      CC: "C",
      CT: "G",
      TA: "G",
      TG: "A",
      TC: "G",
      TT: "T",
    }[`${acc}${cur}`];
  })
);
