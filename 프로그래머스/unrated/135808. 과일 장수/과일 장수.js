function solution(k, m, score) {
    let countApple = new Array(k).fill(0);
    score.forEach((a) => countApple[a - 1]++);
    
    let curBox = 0, result = 0, idx = k - 1;
    while(idx >= 0) {
        if(curBox + countApple[idx] <= m) {
            curBox += countApple[idx];
            countApple[idx] = 0;
            if(curBox === m) {
                result += m * (idx + 1);
                curBox = 0;
            }
            idx--;
        }
        else {
            countApple[idx] -= m - curBox;
            result += m * (idx + 1);
            curBox = 0;
        }
    }
    
    return result;
}