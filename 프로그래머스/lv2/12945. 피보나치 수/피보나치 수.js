function solution(n) {
    let fiboA = 0, fiboB = 1;
    
    for(let i = 2; i <= n; i++) {
        let temp = fiboB;
        fiboB = (fiboA + fiboB) % 1234567;
        fiboA = temp;
    }
    
    return fiboB;
}