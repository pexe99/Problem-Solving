function solution(n) {
    let result = 1;
    
    for(let i = 2; i <= n; i++) {
        if(n % i === 0 && i % 2) result++;
    }
    
    return result;
}