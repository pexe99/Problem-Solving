function solution(board, moves) {
    let stack = [], result = 0;
    board = transpose(board).map((row) => row.filter((v) => v !== 0).reverse());
    console.log(board);
    moves.forEach((v) => {
        let current = board[v - 1].pop();
        if(current) {
            if(stack.at(-1) === current) {
                stack.pop();
                result += 2;
            }
            else stack.push(current);
        }
    })
    return result;
}

const transpose = matrix => {
    return matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);
}