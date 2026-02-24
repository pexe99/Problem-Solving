const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

console.log(
  input
    .slice(0, input.length - 1)
    .map(
      (key) =>
        ({
          animal: "Panthera tigris",
          tree: "Pinus densiflora",
          flower: "Forsythia koreana",
        }[key])
    )
    .join("\n")
);
