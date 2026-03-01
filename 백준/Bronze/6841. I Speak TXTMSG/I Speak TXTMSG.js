const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
  .trim()
  .split("\n");

input.forEach((short) =>
  console.log(
    {
      CU: "see you",
      ":-)": "I’m happy",
      ":-(": "I’m unhappy",
      ";-)": "wink",
      ":-P": "stick out my tongue",
      "(~.~)": "sleepy",
      TA: "totally awesome",
      CCC: "Canadian Computing Competition",
      CUZ: "because",
      TY: "thank-you",
      YW: "you’re welcome",
      TTYL: "talk to you later",
    }[short] || short
  )
);
