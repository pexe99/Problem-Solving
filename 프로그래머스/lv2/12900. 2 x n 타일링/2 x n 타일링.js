function solution(n) {
    let before = 0, current = 1, temp = 0;
    while(n--) {
        temp = (before + current) % 1000000007;
        before = current % 1000000007;
        current = temp % 1000000007;
    }
    return current % 1000000007;
}