const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const MAXIMUM = 118;
const PRIME = Array.from({ length: MAXIMUM + 1 }, () => true);
PRIME[0] = PRIME[1] = false;
for (let i = 2; i <= MAXIMUM; i++) {
  if (PRIME[i]) {
    for (let j = 2; j * i <= MAXIMUM; j++) PRIME[j * i] = false;
  }
}

const [_, ...a] = input.map((e) => +e);
a.forEach((cur) => {
  let result = false;
  for (let i = 2; i < cur; i++) {
    if (PRIME[i] && PRIME[cur - i]) result = true;
  }
  console.log(result ? "Yes" : "No");
});
