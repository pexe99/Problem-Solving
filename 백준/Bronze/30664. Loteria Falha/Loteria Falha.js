const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input
  .slice(0, input.length - 1)
  .forEach((number) =>
    console.log(BigInt(number) % 42n === 0n ? "PREMIADO" : "TENTE NOVAMENTE")
  );
