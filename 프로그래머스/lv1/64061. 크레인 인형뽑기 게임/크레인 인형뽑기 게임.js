function solution(board, moves) {
    let stack = [], result = [];
    moves.forEach((v) => {
        for(let i = 0; i < board.length; i++) {
            if(board[i][v - 1] !== 0) {
                stack.push(board[i][v - 1]);
                board[i][v - 1] = 0;
                return;
            }
        } 
    });
    stack.forEach((v) => {
        if(result.at(-1) === v) result.pop();
        else result.push(v);
    });
    return stack.length - result.length;
}