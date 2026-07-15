function solution(number, limit, power) {
    let result = 1;
    
    for(let i = 2; i <= number; i++) {
        let divisor = 0;
        for(let n = 1; n <= Math.sqrt(i); n++) {
            divisor += i % n === 0 ? n !== i / n ? 2 : 1 : 0;
        }
        result += limit < divisor ? power : divisor;
    }
    
    return result;
}