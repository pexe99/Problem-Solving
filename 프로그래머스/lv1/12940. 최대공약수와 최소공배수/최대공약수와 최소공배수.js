function solution(n, m) {
    let a = Math.max(n, m);
    let b = Math.min(n, m);
    
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return [a, n * m / a];
}