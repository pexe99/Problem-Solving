function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let minApple = score.filter((_, i) => (i + 1) % m === 0);
    return minApple.reduce((s, v) => s + v, 0) * m;
}