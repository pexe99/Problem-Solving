function solution(board) {
    let safeCounter = 0;
    const around = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    board.forEach((b, idx1) => b.forEach((v, idx2) => {
        if(v === 1) return false;
        return around.some(([x, y]) => !!board[x + idx1] && board[x + idx1][y + idx2] === 1) ? false : safeCounter++;
    }));
    return safeCounter;
}