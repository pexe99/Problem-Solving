const solution = (arr) => {
    const number = [];
    const operation = [];
    arr.forEach((e, i) => i % 2 ? operation.push(e) : number.push(+e));
    
    const n = number.length;
    const dp = Array.from({length: n}, (_, i) => {
        return Array.from({length: n}, (_, j) => {
            const current = {max: -Infinity, min: Infinity};
            if(i === j) current.max = current.min = number[i];
            return current;
        });
    });
    
    for(let i = n - 2; i >= 0; i--) {
        for(let j = i + 1; j < n; j++) {
            for(let k = i; k < j; k++) {
                let curMax, curMin;
                if(operation[k] === '+') {
                    curMax = dp[i][k].max + dp[k + 1][j].max;
                    curMin = dp[i][k].min + dp[k + 1][j].min;
                } else {
                    curMax = dp[i][k].max - dp[k + 1][j].min;
                    curMin = dp[i][k].min - dp[k + 1][j].max;
                }
                dp[i][j].max = Math.max(dp[i][j].max, curMax);
                dp[i][j].min = Math.min(dp[i][j].min, curMin);
            }
        }
    }
    
    return dp[0][n - 1].max;
}