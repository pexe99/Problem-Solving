const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const students = new Set(Array.from({ length: 30 }, (_, i) => i + 1));

input.map((e) => e.split(" ").map((n) => students.delete(+n)));

[...students].forEach((e) => console.log(e));
