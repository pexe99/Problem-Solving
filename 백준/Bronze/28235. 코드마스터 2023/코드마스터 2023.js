const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  { SONGDO: "HIGHSCHOOL", CODE: "MASTER", 2023: "0611", ALGORITHM: "CONTEST" }[
    input[0]
  ]
);
