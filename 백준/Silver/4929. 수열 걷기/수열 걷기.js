const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const sequences = input.map((str) => str.split(" ").map((e) => +e)).reverse();

const getMaxSum = (array1, array2, start1, start2, end1, end2) => {
  let [sum1, sum2] = [0, 0];
  for (let i = start1; i <= end1; i++) sum1 += array1[i];
  for (let i = start2; i <= end2; i++) sum2 += array2[i];
  return Math.max(sum1, sum2);
};

while (sequences.length > 1) {
  let [s1, s2] = [sequences.pop().slice(1), sequences.pop().slice(1)];
  let cross = new Map();
  s1.forEach((e, i) => cross.set(e, [i]));
  s2.forEach((e, i) => cross.has(e) && cross.get(e).push(i));

  let [idx1, idx2, result, crossPoints] = [0, 0, 0, []];
  cross.forEach((value) => value.length === 2 && crossPoints.push(value));
  crossPoints.forEach((points) => {
    let [end1, end2] = points;
    result += getMaxSum(s1, s2, idx1, idx2, end1, end2);
    [idx1, idx2] = [end1 + 1, end2 + 1];
  });

  result += getMaxSum(s1, s2, idx1, idx2, s1.length - 1, s2.length - 1);
  console.log(result);
}
