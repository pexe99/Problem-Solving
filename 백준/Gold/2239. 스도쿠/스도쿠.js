const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const sudoku = input.map((e) => e.split("").map(Number));

const toggle = (i, j, num, used) => {
  const mask = 1 << num;
  const areaIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  used.row[i] ^= mask;
  used.col[j] ^= mask;
  used.area[areaIndex] ^= mask;
};

const isAvailable = (i, j, num, used) => {
  const mask = 1 << num;
  const areaIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  return (
    !(used.row[i] & mask) &&
    !(used.col[j] & mask) &&
    !(used.area[areaIndex] & mask)
  );
};

const fillSudoku = (index, empties, used, sudoku) => {
  if (empties.length <= index) return true;
  const [i, j] = empties[index];
  for (let num = 1; num <= 9; num++) {
    if (isAvailable(i, j, num, used)) {
      sudoku[i][j] = num;
      toggle(i, j, num, used);
      if (fillSudoku(index + 1, empties, used, sudoku)) return true;
      sudoku[i][j] = 0;
      toggle(i, j, num, used);
    }
  }
  return false;
};

const solution = (sudoku) => {
  const used = {};
  const empties = [];
  used.row = new Array(9).fill(0 << 9);
  used.col = new Array(9).fill(0 << 9);
  used.area = new Array(9).fill(0 << 9);

  sudoku.forEach((row, i) =>
    row.forEach((num, j) => {
      if (num === 0) empties.push([i, j]);
      toggle(i, j, num, used);
    })
  );
  fillSudoku(0, empties, used, sudoku);

  return sudoku.map((row) => row.join("")).join("\n");
};

console.log(solution(sudoku));
