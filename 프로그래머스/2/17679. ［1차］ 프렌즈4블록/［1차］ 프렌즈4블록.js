class Board {
    constructor(m, n, board) {
        this.m = m;
        this.n = n;
        this.deleteBlockSet = new Set();
        this.map = board.map((string) => string.split(""));
        this.deleteCounter = 0;
    }
    
    _findDeleteBlock() {
        for(let i = 0; i < this.m - 1; i++) {
            for(let j = 0; j < this.n - 1; j++) {
                const current = this.map[i][j];
                if(current !== null &&
                   this.map[i][j + 1] === current &&
                   this.map[i + 1][j] === current &&
                   this.map[i + 1][j + 1] === current) {
                    this.deleteBlockSet.add(`${i},${j}`);
                    this.deleteBlockSet.add(`${i},${j + 1}`);
                    this.deleteBlockSet.add(`${i + 1},${j}`);
                    this.deleteBlockSet.add(`${i + 1},${j + 1}`);
                }
            }
        }
    }
    
    _dropBlock() {
        for(let j = 0; j < this.n; j++) {
            const column = [];
            for(let i = 0; i < this.m; i++) {
                if(this.map[i][j]) column.push(this.map[i][j]);
            }
            const padding = this.m - column.length;
            for(let i = 0; i < this.m; i++) {
                this.map[i][j] = i < padding ? null : column[i - padding];
            }
        }
    }
    
    checkDeleteBlock() {
        this._findDeleteBlock();
        return 0 < this.deleteBlockSet.size;
    }
    
    deleteBlock() {
        [...this.deleteBlockSet].forEach((string) => {
            const [i, j] = string.split(",").map((e) => +e);
            this.map[i][j] = null;
            this.deleteCounter++;
        });
        this.deleteBlockSet.clear();
        this._dropBlock();
    }
    
    getResult() {
        return this.deleteCounter;
    }
}

function solution(m, n, board) {
    const game = new Board(m, n, board);
    while(game.checkDeleteBlock()) game.deleteBlock();
    return game.getResult();
}