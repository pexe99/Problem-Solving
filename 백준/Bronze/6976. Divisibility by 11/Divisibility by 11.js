const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .slice(1)
    .map((e) => {
      let number = BigInt(e);
      const result = [number.toString()];
      while (100n <= number) {
        number = number / 10n - (number % 10n);
        result.push(number.toString());
      }
      result.push(
        `The number ${e} is${
          number % 11n === 0n ? "" : " not"
        } divisible by 11.`
      );
      return result.join("\n");
    })
    .join("\n\n")
);
