function solution(n, k) {
    let answer = [];
    let line = Array.from({length: n}, (_, i) => i + 1);
    let caseNum = line.reduce((result, current) => result * current, 1);
    
    while(answer.length < n) {
        caseNum /= line.length;
        answer.push(...line.splice(Math.floor((k - 1) / caseNum), 1))
        k %= caseNum;
    }
    return answer;
}