function solution(board) {
    board.forEach((b, idx1) => {
        b.forEach((v, idx2) => {
            if(v === 1) {
                for(let i = idx1 - 1; i <= idx1 + 1; i++) {
                    for(let j = idx2 - 1; j <= idx2 + 1; j++) {
                        if(i >= 0 && j >= 0 && i < board.length && j < board.length && board[i][j] !== 1) board[i][j] = 2;
                    }
                }
            }
        }) 
    })
    return board.reduce((s, b) => s + b.filter((v) => v === 0).length, 0);
}