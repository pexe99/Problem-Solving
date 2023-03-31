function solution(n) {
    let current = 1, factorial = 1;
    while(current * (factorial + 1) <= n) {
        current *= ++factorial;
    }
    return factorial;
}