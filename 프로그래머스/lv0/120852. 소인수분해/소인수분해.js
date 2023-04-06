function solution(n) {
    let divisor = [];
    
    let temp = 2;
    while(n !== 1) {
        if(n % temp === 0) {
            n /= temp;
            divisor.push(temp);
        }
        else temp++;
    }
    
    return [...new Set(divisor)];
}