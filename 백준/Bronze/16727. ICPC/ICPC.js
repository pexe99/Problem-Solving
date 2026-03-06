const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

const [[P1, S1], [S2, P2]] = input.map((e) => e.split(" ").map(Number));
if (P1 + P2 > S1 + S2 || (P1 + P2 === S1 + S2 && S1 < P2))
  console.log("Persepolis");
else if (P1 + P2 < S1 + S2 || (P1 + P2 === S1 + S2 && S1 > P2))
  console.log("Esteghlal");
else console.log("Penalty");
