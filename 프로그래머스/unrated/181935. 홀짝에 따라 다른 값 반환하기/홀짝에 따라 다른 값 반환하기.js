function solution(n) {
    if(n % 2) {
        let result = 0;
        for(let i = 1; i <= n; i += 2) result += i;
        return result;
    }
    let result = 0;
    for(let i = 2; i <= n; i += 2) result += Math.pow(i, 2);
    return result;
}