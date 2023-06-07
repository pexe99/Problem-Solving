function solution(a, b) {
    let minNum = Math.min(a, b);
    for(let i = 2; i <= minNum; i++) {
        if(!(a % i) && !(b % i)) {
            a = a / i;
            b = b / i;
        }
    }
    
    let divisor = 2;
    while(b !== 1) {
        if(!(b % divisor)) {
            if(divisor !== 2 && divisor !== 5) return 2;
            b = b / divisor;
        }
        else divisor++;
    }
    return 1;
}