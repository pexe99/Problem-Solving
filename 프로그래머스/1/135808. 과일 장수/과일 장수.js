function solution(k, m, score) {
    let result = 0;
    score.sort((a, b) => a - b);
    while(m <= score.length) {
        for(let i = 0; i < m - 1; i++) score.pop();
        result += score.pop() * m;
    }
    return result;
}