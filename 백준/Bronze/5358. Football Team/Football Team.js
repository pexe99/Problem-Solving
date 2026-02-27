const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.forEach((line) => {
  const result = [...line];
  [...line].forEach((char, index) =>
    char === "e"
      ? (result[index] = "i")
      : char === "i"
      ? (result[index] = "e")
      : char === "E"
      ? (result[index] = "I")
      : char === "I"
      ? (result[index] = "E")
      : null
  );
  console.log(result.join(""));
});
