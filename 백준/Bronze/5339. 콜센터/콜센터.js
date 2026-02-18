const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  "     /~\\\n    ( oo|\n    _\\=/_\n   /  _  \\\n  //|/.\\|\\\\\n ||  \\ /  ||\n============\n|          |\n|          |\n|          |"
);
