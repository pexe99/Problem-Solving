function solution(n) {
    let answer = [1];
    
    for(i = 2; i <= n; i++) {
        if(n % i === 0) answer.push(i);
    }
    
    return answer;
}