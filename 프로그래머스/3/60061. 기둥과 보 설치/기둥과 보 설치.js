const BEAM = 0, PILLAR = 1, DELETE = 0, ADD = 1, NONE = -1;

const solution = (n, build_frame) => {
    const board = Array.from({length: n + 1}, () => {
       return Array.from({length: n + 1}, () => [false, false]);
    });
    
    build_frame.forEach(([x, y, type, method]) => {
        if(method === ADD) {
            if(type === BEAM && checkBeamAvailable(board, x, y))
                board[x][y][BEAM] = true;
            if(type === PILLAR && checkPillarAvailable(board, x, y))
                board[x][y][PILLAR] = true;
        } else if(method === DELETE) {
            board[x][y][type] = false;
            if(!checkAvailable(board)) board[x][y][type] = true;
        }
    });
    
    return getResultArray(board);
}

const checkBeamAvailable = (board, x, y) => {
    if(y === 0) return true;
    else if(board[x][y - 1]?.[BEAM] || board[x][y]?.[PILLAR]) return true;
    else if(board[x - 1]?.[y][PILLAR]) return true;
    else return false;
}

const checkPillarAvailable = (board, x, y) => {
    if(board[x][y - 1]?.[BEAM] || board[x + 1]?.[y - 1]?.[BEAM]) return true;
    else if(board[x - 1]?.[y][PILLAR] && board[x + 1]?.[y][PILLAR]) return true;
    else return false;
}

const checkAvailable = (board) => {
    for(let x = 0; x < board.length; x++) {
        for(let y = 0; y < board[0].length; y++) {
            const [beam, pillar] = board[x][y];
            if(beam && !checkBeamAvailable(board, x, y)) return false;
            if(pillar && !checkPillarAvailable(board, x, y)) return false;
        }
    }
    return true;
}

const getResultArray = (board) => {
    const result = [];
    board.forEach((array, x) => {
        array.forEach(([beam, pillar], y) => {
            if(beam) result.push([x, y, BEAM]);
            if(pillar) result.push([x, y, PILLAR]);
        });
    });
    result.sort((a, b) => a[0] - b[0] || a[1] || b[1] || a[2] - b[2]);
    return result;
}