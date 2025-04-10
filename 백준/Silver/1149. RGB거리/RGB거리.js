const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input[0];
const house = input.slice(1).map((str) => str.split(" ").map((e) => +e));

for (let i = 1; i < house.length; i++) {
  house[i] = house[i].map((e, idx) => {
    return (
      e + Math.min(house[i - 1][(idx + 1) % 3], house[i - 1][(idx + 2) % 3])
    );
  });
}

console.log(Math.min(...house[house.length - 1]));
