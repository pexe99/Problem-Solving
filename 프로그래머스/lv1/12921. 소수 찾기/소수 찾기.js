function solution(n) {
    let result = Array.from({length: n - 1}, (_, i) => i + 2);
    let answer = 0;
    
    for(let i = 0; i < result.length; i++) {
        if(result[i] !== -1) {
            answer++;
            const curPrime = result[i];
            for(let j = 2; j * curPrime - 2 <= result.length; j++) result[j * curPrime - 2] = -1;
        }
    }
    return answer;
}