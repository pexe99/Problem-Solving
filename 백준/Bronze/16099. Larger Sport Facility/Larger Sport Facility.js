const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.slice(1).forEach((e) => {
  const [lt, wt, le, we] = e.split(" ").map(BigInt);
  console.log(
    lt * wt < le * we
      ? "Eurecom"
      : lt * wt === le * we
      ? "Tie"
      : "TelecomParisTech"
  );
});
