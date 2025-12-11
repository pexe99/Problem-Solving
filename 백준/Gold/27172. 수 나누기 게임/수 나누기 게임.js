const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

let max = 0;
const N = +input[0];
const scores = {};
const players = input[1].split(" ").map((e) => {
  const current = +e;
  scores[current] = 0;
  max = Math.max(max, current);
  return current;
});

players.forEach((player) => {
  for (let i = player * 2; i <= max; i += player) {
    if (scores[i] !== undefined) {
      scores[player]++;
      scores[i]--;
    }
  }
});

console.log(players.map((e) => scores[e]).join(" "));
