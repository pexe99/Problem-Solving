function solution(matrix_sizes) {
    let dp = Array.from({length: matrix_sizes.length}, (_, idx1) => {
        return Array.from({length: matrix_sizes.length}, (_, idx2) => idx1 === idx2 ? 0 : Infinity);
    });
    for(let i = 0; i < matrix_sizes.length; i++) {
        for(let j = 0; j < matrix_sizes.length - i; j++) {
            let [a, b] = [j, j + i];
            for(let k = a; k < b; k++) {
                let current = dp[a][k] + dp[k + 1][b] + (matrix_sizes[a][0] * matrix_sizes[k][1] * matrix_sizes[b][1]);
                dp[a][b] = Math.min(dp[a][b], current);
            }
        }
    }
    return dp[0].at(-1);
}