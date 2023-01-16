function solution(n) {
    return n % 2 === 1 ? (n + 1) / 2 * (n - 1) / 2 : (n + 2) / 2 * n / 2;
}