const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [antenna, eyes] = input.map(Number);
if (3 <= antenna && eyes <= 4) console.log("TroyMartian");
if (antenna <= 6 && 2 <= eyes) console.log("VladSaturnian");
if (antenna <= 2 && eyes <= 3) console.log("GraemeMercurian");
