const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  {
    NLCS: "North London Collegiate School",
    BHA: "Branksome Hall Asia",
    KIS: "Korea International School",
    SJA: "St. Johnsbury Academy",
  }[input[0]]
);
