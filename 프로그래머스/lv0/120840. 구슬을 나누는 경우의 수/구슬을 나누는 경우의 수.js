function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)));
}

function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) result *= i;
    return result;
}