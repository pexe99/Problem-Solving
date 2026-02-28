const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.forEach((e) => {
  const [sh, sm, ss, eh, em, es] = e.split(" ").map(Number);
  const diff = eh * 3600 + em * 60 + es - (sh * 3600 + sm * 60 + ss);
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  console.log(`${h} ${m} ${s}`);
});
