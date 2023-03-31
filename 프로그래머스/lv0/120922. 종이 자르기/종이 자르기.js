function solution(M, N) {
    return Math.max(M, N) - 1 + (Math.min(M, N) - 1) * Math.max(M, N);
}