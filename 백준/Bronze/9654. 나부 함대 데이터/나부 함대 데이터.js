const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const info = [
  ["SHIP NAME", "CLASS", "DEPLOYMENT", "IN SERVICE"],
  ["N2 Bomber", "Heavy Fighter", "Limited", "21"],
  ["J-Type 327", "Light Combat", "Unlimited", "1"],
  ["NX Cruiser", "Medium Fighter", "Limited", "18"],
  ["N1 Starfighter", "Medium Fighter", "Unlimited", "25"],
  ["Royal Cruiser", "Light Combat", "Limited", "4"],
];

console.log(
  info
    .map((row) =>
      row
        .map((cell, idx) => cell.padEnd(idx < 2 ? 15 : idx === 2 ? 11 : 10))
        .join("")
    )
    .join("\n")
);
