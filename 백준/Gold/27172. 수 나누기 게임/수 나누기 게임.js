const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const MAXIMUM = 1000000;

const N = +input[0];
const scores = {};
const players = input[1].split(" ").map((e) => {
  const current = +e;
  scores[current] = 0;
  return current;
});

players.forEach((player) => {
  for (let i = player; i <= MAXIMUM; i += player) {
    if (scores[i] !== undefined) {
      scores[player]++;
      scores[i]--;
    }
  }
});

console.log(players.map((e) => scores[e]).join(" "));
