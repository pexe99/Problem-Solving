const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N, M], ...lab] = input.map((e) => e.split(" ").map(Number));

const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const getCombination = (array, targetLen) => {
  const result = [];
  const combination = (index, current = []) => {
    if (current.length === targetLen) result.push(current);
    else {
      for (let i = index; i < array.length; i++)
        combination(i + 1, [...current, array[i]]);
    }
  };
  combination(0);
  return result;
};

const isAvailable = (lab, i, j) => {
  return (
    0 <= i && i < lab.length && 0 <= j && j < lab[0].length && lab[i][j] === 0
  );
};

const getCleanAreaSize = (lab, virus, cleanSize) => {
  let counter = 0;
  for (let i = 0; i < virus.length; i++) {
    const [ci, cj] = virus[i];
    DIRECTION.forEach(([di, dj]) => {
      const [ni, nj] = [ci + di, cj + dj];
      if (isAvailable(lab, ni, nj)) {
        lab[ni][nj] = 1;
        virus.push([ni, nj]);
        counter++;
      }
    });
  }
  return cleanSize - counter;
};

const solution = (N, M, lab) => {
  const virus = [];
  const clean = [];
  lab.forEach((row, i) =>
    row.forEach((e, j) => {
      if (e === 0) clean.push([i, j]);
      if (e === 2) virus.push([i, j]);
    })
  );

  return getCombination(clean, 3).reduce(
    (res, [[i1, j1], [i2, j2], [i3, j3]]) => {
      lab[i1][j1] = lab[i2][j2] = lab[i3][j3] = 1;
      res = Math.max(
        res,
        getCleanAreaSize(
          lab.map((e) => [...e]),
          [...virus],
          clean.length - 3
        )
      );
      lab[i1][j1] = lab[i2][j2] = lab[i3][j3] = 0;
      return res;
    },
    0
  );
};

console.log(solution(N, M, lab));
