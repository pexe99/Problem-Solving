function solution(board, moves) {
    let stack = [], result = 0;
    moves.forEach((v) => {
        for(let i = 0; i < board.length; i++) {
            if(board[i][v - 1] !== 0) {
                if(board[i][v - 1] === stack.at(-1)) {
                    stack.pop();
                    result += 2;
                }
                else stack.push(board[i][v - 1]);
                board[i][v - 1] = 0;
                return;
            }
        } 
    });
    return result;
}