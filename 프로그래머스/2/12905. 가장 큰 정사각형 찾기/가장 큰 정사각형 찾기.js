/*
category: Dynamic Programming

[input]
- board: 0, 1로 이루어진 2차원 배열

[output]
- 가장 큰 정사각형의 넓이를 반환

[solution]
- 1로만 이루어진 가장 큰 정사각형의 넓이를 찾는 것이 목표
- dp[x][y] = 해당 지점을 우측 하단 좌표로 하는 가장 큰 정사각형 길이를 저장
- x = 0, y = 0인 경우는 0이라면 0, 1이라면 최대 1이기 때문에 갱신 X
- dp[x][y] = Math.min(dp[x - 1][y], dp[x][y - 1], dp[x - 1][y - 1]) + 1
*/

function solution(board) {
    let result = 0;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(0 < i && 0 < j && board[i][j])
                board[i][j] = Math.min(board[i - 1][j], 
                                       board[i][j - 1], 
                                       board[i - 1][j - 1]) + 1;
            result = Math.max(board[i][j] ** 2, result);
        }
    }
    return result;
}