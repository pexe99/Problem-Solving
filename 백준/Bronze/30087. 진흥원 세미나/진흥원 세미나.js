const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const info = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: 'B101',
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};
input.slice(1).forEach((seminar) => console.log(info[seminar]));
