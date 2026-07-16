function solution(a, b, n) {
    if (n < a) return 0;

    const exchanged = Math.floor(n / a) * b;
    const remain = n % a;

    return exchanged + solution(a, b, exchanged + remain);
}