const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((e) => {
  const [id, a, b, c] = e.split(" ").map(Number);
  const sum = a + b + c;
  console.log(
    `${id} ${sum} ${
      35 * 0.3 <= a && 25 * 0.3 <= b && 40 * 0.3 <= c && 55 <= sum
        ? "PASS"
        : "FAIL"
    }`
  );
});
