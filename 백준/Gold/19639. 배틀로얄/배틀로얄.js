const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [X, Y, M] = input[0].split(" ").map(Number);
const users = input.slice(1, X + 1).map((v, idx) => [+v, -(idx + 1)]);
const items = input.slice(X + 1, X + Y + 1).map((v, idx) => [+v, idx + 1]);

users.sort((a, b) => b[0] - a[0]);
items.sort((a, b) => b[0] - a[0]);

let currentHealth = M;
const actions = [];

while (users.length > 0 || items.length > 0) {
  if (users.length > 0 && users[users.length - 1][0] < currentHealth) {
    const [damage, userIdx] = users.pop();
    actions.push(userIdx);
    currentHealth -= damage;
  } else if (items.length > 0) {
    const [heal, itemIdx] = items.pop();
    actions.push(itemIdx);
    currentHealth = Math.min(currentHealth + heal, M);
  } else {
    console.log(0);
    process.exit(0);
  }
}

console.log(actions.join("\n"));
