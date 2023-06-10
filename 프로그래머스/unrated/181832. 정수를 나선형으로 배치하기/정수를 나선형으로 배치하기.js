function solution(n) {
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let result = Array.from({length: n}, (_) => new Array(n).fill(0));
    let i = 0, j = 0, current = 0;
    for(let counter = 1; counter <= n * n; counter++) {
        result[i][j] = counter;
        let curI = i + direction[current][0];
        let curJ = j + direction[current][1];
        if(curI >= n || curJ >= n || curI < 0 || curJ < 0 || result[curI][curJ] !== 0) {
            current = (current + 1) % 4;
            curI = i + direction[current][0];
            curJ = j + direction[current][1];
        }
        i = curI;
        j = curJ;
    }
    return result;
}