function solution(n) {
    let current = 1, factorial = 1;
    while(current * factorial < n) {
        current *= ++factorial;
    }
    return factorial;
}