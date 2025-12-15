const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const DIRECTION = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const [[R, C, T], ...room] = input.map((str) => str.split(" ").map(Number));

class AirPurifier {
  constructor(row, col, room) {
    this.row = row;
    this.col = col;
    this.room = room;
    this.upperPuri = this.room.findIndex((row) => row[0] === -1);
    this.lowerPuri = this.upperPuri + 1;
  }

  _isAvailable(r, c) {
    return 0 <= r && r < this.row && 0 <= c && c < this.col;
  }

  _diffusion() {
    const nextRoom = Array.from({ length: this.row }, () =>
      new Array(this.col).fill(0)
    );
    nextRoom[this.upperPuri][0] = -1;
    nextRoom[this.lowerPuri][0] = -1;

    this.room.forEach((row, r) =>
      row.forEach((e, c) => {
        if (e <= 0) return;
        let counter = 0;
        const diffuseAmount = Math.floor(e / 5);
        DIRECTION.forEach(([dr, dc]) => {
          const [nr, nc] = [r + dr, c + dc];
          if (this._isAvailable(nr, nc) && this.room[nr][nc] !== -1) {
            nextRoom[nr][nc] += diffuseAmount;
            counter++;
          }
        });
        nextRoom[r][c] += e - diffuseAmount * counter;
      })
    );
    this.room = nextRoom;
  }

  _circulation() {
    let [tr, tc] = [this.upperPuri - 1, 0];
    while (0 < tr) this.room[tr][tc] = this.room[--tr][tc];
    while (tc < this.col - 1) this.room[tr][tc] = this.room[tr][++tc];
    while (tr < this.upperPuri) this.room[tr][tc] = this.room[++tr][tc];
    while (1 < tc) this.room[tr][tc] = this.room[tr][--tc];
    this.room[tr][tc] = 0;

    let [br, bc] = [this.lowerPuri + 1, 0];
    while (br < this.row - 1) this.room[br][bc] = this.room[++br][bc];
    while (bc < this.col - 1) this.room[br][bc] = this.room[br][++bc];
    while (this.lowerPuri < br) this.room[br][bc] = this.room[--br][bc];
    while (1 < bc) this.room[br][bc] = this.room[br][--bc];
    this.room[br][bc] = 0;
  }

  get _fineDust() {
    return this.room.reduce(
      (res, row) => res + row.reduce((acc, e) => acc + (e === -1 ? 0 : e), 0),
      0
    );
  }

  simulate(second) {
    while (second--) {
      this._diffusion();
      this._circulation();
    }
    return this._fineDust;
  }
}

const solution = (R, C, T, room) => {
  const AirPurifierSimulator = new AirPurifier(R, C, room);
  return AirPurifierSimulator.simulate(T);
};

console.log(solution(R, C, T, room));
