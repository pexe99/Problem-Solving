const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const T = +input.shift();

const WALL = "*";
const EMPTY = ".";
const DOCUMENT = "$";
const REGEXP_KEY = /^[a-z]$/;
const REGEXP_DOOR = /^[A-Z]$/;
const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const isBorder = (i, j, h, w) =>
  0 === i || i === h - 1 || 0 === j || j === w - 1;

const isAvailable = (i, j, h, w, visited) =>
  0 <= i && i < h && 0 <= j && j < w && visited !== WALL && !visited[i][j];

const getStealableDocumentNumber = (h, w, map, keyString) => {
  const door = {};
  const queue = [];
  const key = new Set(keyString === "0" ? [] : [...keyString]);
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false)
  );

  let counter = 0;

  map.forEach((row, i) =>
    row.forEach((e, j) => {
      if (isBorder(i, j, h, w)) {
        if (e === EMPTY) {
          queue.push([i, j]);
        } else if (e === DOCUMENT) {
          counter++;
          queue.push([i, j]);
        } else if (REGEXP_DOOR.test(e)) {
          const doorKey = e.toLowerCase();
          if (key.has(doorKey)) {
            queue.push([i, j]);
          } else door[doorKey] = [...(door[doorKey] || []), [i, j]];
        } else if (REGEXP_KEY.test(e)) {
          key.add(e);
          queue.push([i, j]);
        }
        visited[i][j] = true;
      }
    })
  );

  key.forEach((e) => door[e] && queue.push(...door[e]));

  for (let index = 0; index < queue.length; index++) {
    const [ci, cj] = queue[index];
    DIRECTION.forEach(([di, dj]) => {
      const [ni, nj] = [ci + di, cj + dj];
      if (isAvailable(ni, nj, h, w, visited)) {
        const e = map[ni][nj];
        if (e === EMPTY) {
          queue.push([ni, nj]);
        } else if (e === DOCUMENT) {
          counter++;
          queue.push([ni, nj]);
        } else if (REGEXP_DOOR.test(e)) {
          const doorKey = e.toLowerCase();
          if (key.has(doorKey)) {
            queue.push([ni, nj]);
          } else door[doorKey] = [...(door[doorKey] || []), [ni, nj]];
        } else if (REGEXP_KEY.test(e)) {
          key.add(e);
          queue.push([ni, nj]);
          if (door[e]) queue.push(...door[e]);
          door[e] = [];
        }
        visited[ni][nj] = true;
      }
    });
  }

  return counter;
};

const solution = (T, input) => {
  const result = [];

  while (T--) {
    const [h, w] = input.shift().split(" ").map(Number);
    const map = input.splice(0, h).map((e) => e.split(""));
    const keyString = input.shift();
    result.push(getStealableDocumentNumber(h, w, map, keyString));
  }

  return result.join("\n");
};

console.log(solution(T, input));
