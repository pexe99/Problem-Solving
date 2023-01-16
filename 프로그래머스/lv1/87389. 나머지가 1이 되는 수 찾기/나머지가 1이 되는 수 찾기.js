function solution(n) {
    let answer = 2;
    
    for(;;) {
        if(n % answer === 1) break;
        else answer++;
    }
    
    return answer;
}