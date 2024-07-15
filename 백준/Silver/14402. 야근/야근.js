const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = +input[0];
const record = input.slice(1).map((str) => str.split(" "));
const checkRecord = {};
let result = 0;
record.forEach(([name, attendance]) => {
  if (checkRecord[name] >= 0) {
    if (attendance === "+") checkRecord[name]++;
    else checkRecord[name]--;
  } else if (checkRecord[name] < 0) {
    if (attendance === "+") {
      result -= checkRecord[name];
      checkRecord[name] = 1;
    } else checkRecord[name]--;
  } else checkRecord[name] = attendance === "+" ? 1 : -1;
});

Object.values(checkRecord).forEach((e) => (result += Math.abs(e)));
console.log(result);
