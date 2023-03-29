function solution(keyinput, board) {
    let coordinate = {x : 0, y : 0};
    
    for(current of keyinput) {
        if(current === "left" && coordinate.x > -(board[0] - 1) / 2) coordinate.x--;
        if(current === "right" && coordinate.x < (board[0] - 1) / 2) coordinate.x++;
        if(current === "down" && coordinate.y > -(board[1] - 1) / 2) coordinate.y--;
        if(current === "up" && coordinate.y < (board[1] - 1) / 2) coordinate.y++;
    }
    
    return [coordinate.x, coordinate.y];
}