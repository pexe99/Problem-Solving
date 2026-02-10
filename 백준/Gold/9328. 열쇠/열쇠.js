const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const T = +input.shift();

class Building {
  WALL = "*";
  EMPTY = ".";
  DOCUMENT = "$";
  REGEXP_KEY = /^[a-z]$/;
  REGEXP_DOOR = /^[A-Z]$/;
  DIRECTION = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  constructor(h, w, map, keyString) {
    this.h = h;
    this.w = w;
    this.map = map;
    this.key = new Set();
    this.visited = Array.from({ length: h }, () =>
      Array.from({ length: w }, () => false)
    );

    keyString !== "0" && keyString.split("").forEach((e) => this.key.add(e));
  }

  updateKey(i, j) {
    this.key.add(this.map[i][j]);
  }

  isWall(i, j) {
    return this.WALL === this.map[i][j];
  }

  isEmpty(i, j) {
    return this.EMPTY === this.map[i][j];
  }

  isDocument(i, j) {
    return this.DOCUMENT === this.map[i][j];
  }

  isKey(i, j) {
    return this.REGEXP_KEY.test(this.map[i][j]);
  }

  isDoor(i, j) {
    return this.REGEXP_DOOR.test(this.map[i][j]);
  }

  isDoorAvailable(i, j) {
    return this.key.has(this.map[i][j].toLowerCase());
  }

  isAvailable(i, j) {
    return (
      0 <= i &&
      i < this.h &&
      0 <= j &&
      j < this.w &&
      !this.visited[i][j] &&
      !this.isWall(i, j)
    );
  }

  isBorder(i, j) {
    return i === 0 || i === this.h - 1 || j === 0 || j === this.w - 1;
  }

  getStealableDocs() {
    let result = 0;
    const door = {};
    const queue = [];

    for (let i = 0; i < this.h; i++) {
      for (let j = 0; j < this.w; j++) {
        if (!this.isBorder(i, j) || this.isWall(i, j)) continue;
        else if (this.isDoor(i, j) && !this.isDoorAvailable(i, j)) {
          door[this.map[i][j].toLowerCase()] = [
            ...(door[this.map[i][j].toLowerCase()] || []),
            [i, j],
          ];
          continue;
        } else if (this.isKey(i, j)) this.updateKey(i, j);
        else if (this.isDocument(i, j)) result++;
        queue.push([i, j]);
        this.visited[i][j] = true;
      }
    }

    for (let index = 0; index < queue.length; index++) {
      const [ci, cj] = queue[index];
      for (const [di, dj] of this.DIRECTION) {
        const [ni, nj] = [ci + di, cj + dj];
        if (!this.isAvailable(ni, nj)) continue;
        else if (this.isDoor(ni, nj) && !this.isDoorAvailable(ni, nj)) {
          door[this.map[ni][nj].toLowerCase()] = [
            ...(door[this.map[ni][nj].toLowerCase()] || []),
            [ni, nj],
          ];
          continue;
        } else if (this.isDocument(ni, nj)) result++;
        else if (this.isKey(ni, nj)) {
          this.updateKey(ni, nj);
          if (door[this.map[ni][nj]]) {
            door[this.map[ni][nj]].forEach(([dri, drj]) => {
              this.visited[dri][drj] = true;
              queue.push([dri, drj]);
            });
          }
        }
        queue.push([ni, nj]);
        this.visited[ni][nj] = true;
      }
    }

    return result;
  }
}

const solution = (T, input) => {
  const result = [];

  while (T--) {
    const [h, w] = input.shift().split(" ").map(Number);
    const map = input.splice(0, h).map((e) => e.split(""));
    const keyString = input.shift();
    const building = new Building(h, w, map, keyString);
    result.push(building.getStealableDocs());
  }

  return result.join("\n");
};

console.log(solution(T, input));
