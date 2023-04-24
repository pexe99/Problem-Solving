function solution(n) {
    let a = 0, b = 1;
    for(let i = 1; i <= n; i++){
        let temp = a + b;
        a = b;
        b = temp % 1234567;
    }
    return b;
}