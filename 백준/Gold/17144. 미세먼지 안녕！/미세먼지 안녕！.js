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
    this.purifier = [];

    for (let i = 0; i < this.row; i++) {
      if (this.room[i][0] === -1) this.purifier.push(i);
    }
  }

  _isAvailable(r, c) {
    return 0 <= r && r < this.row && 0 <= c && c < this.col;
  }

  _diffusion() {
    const target = [];
    const nextRoom = this.room.map((row) => [...row]);
    this.room.forEach((row, r) =>
      row.forEach((e, c) => 0 < e && target.push([r, c]))
    );

    target.forEach(([r, c]) => {
      let counter = 0;
      const diffuseAmount = Math.floor(this.room[r][c] / 5);
      DIRECTION.forEach(([dr, dc]) => {
        const [nr, nc] = [r + dr, c + dc];
        if (this._isAvailable(nr, nc) && this.room[nr][nc] !== -1) {
          nextRoom[nr][nc] += diffuseAmount;
          counter++;
        }
      });
      nextRoom[r][c] -= diffuseAmount * counter;
    });
    this.room = nextRoom;
  }

  _circulation() {
    let [tr, tc] = [this.purifier[0] - 1, 0];
    while (0 < tr) this.room[tr][tc] = this.room[--tr][tc];
    while (tc < this.col - 1) this.room[tr][tc] = this.room[tr][++tc];
    while (tr < this.purifier[0]) this.room[tr][tc] = this.room[++tr][tc];
    while (1 < tc) this.room[tr][tc] = this.room[tr][--tc];
    this.room[tr][tc] = 0;

    let [br, bc] = [this.purifier[1] + 1, 0];
    while (br < this.row - 1) this.room[br][bc] = this.room[++br][bc];
    while (bc < this.col - 1) this.room[br][bc] = this.room[br][++bc];
    while (this.purifier[1] < br) this.room[br][bc] = this.room[--br][bc];
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
