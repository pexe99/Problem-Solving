function solution(n) {
    let divisor;
    
    if(n === 0) divisor= [0];
    else if(n === 1) divisor = [1];
    else {
        divisor = [1, n];
    
        for(let i = 2; i <= n / 2; i++) {
            if(n % i === 0) divisor.push(i);
        }
    }
    
    return divisor.reduce((sum, cur) => sum += cur);
}