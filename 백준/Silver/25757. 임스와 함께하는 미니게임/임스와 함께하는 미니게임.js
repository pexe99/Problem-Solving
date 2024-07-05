const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const GAMES = { Y: 1, F: 2, O: 3 };
const [N, game] = input[0].split(" ");
const player = new Set();
input.slice(1).map((str) => player.add(str));
console.log(Math.floor(player.size / GAMES[game]));
