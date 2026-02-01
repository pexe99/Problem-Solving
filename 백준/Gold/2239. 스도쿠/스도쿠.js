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
  const areaIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  used.row[i][num] = !used.row[i][num];
  used.col[j][num] = !used.col[j][num];
  used.area[areaIndex][num] = !used.area[areaIndex][num];
};

const isAvailable = (i, j, num, used) => {
  const areaIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  return !used.row[i][num] && !used.col[j][num] && !used.area[areaIndex][num];
};

const fillSudoku = (used, sudoku) => {
  let finish = false;

  const backtracking = (i, j) => {
    if (i === 9) finish = true;
    else if (sudoku[i][j])
      j < 8 ? backtracking(i, j + 1) : backtracking(i + 1, 0);
    else {
      for (let n = 1; n <= 9; n++) {
        if (isAvailable(i, j, n, used)) {
          sudoku[i][j] = n;
          toggle(i, j, n, used);
          j < 8 ? backtracking(i, j + 1) : backtracking(i + 1, 0);
          if (finish) return;
          sudoku[i][j] = 0;
          toggle(i, j, n, used);
        }
      }
    }
  };

  backtracking(0, 0);
};

const solution = (sudoku) => {
  const used = { row: null, col: null, area: null };
  Object.keys(used).forEach(
    (key) =>
      (used[key] = Array.from({ length: 9 }, () => new Array(10).fill(false)))
  );

  sudoku.forEach((row, i) => row.forEach((num, j) => toggle(i, j, num, used)));
  fillSudoku(used, sudoku);

  return sudoku.map((row) => row.join("")).join("\n");
};

console.log(solution(sudoku));
