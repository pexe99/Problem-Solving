function solution(q, r, code) {
    return [...code].filter((_, idx) => idx % q === r).join('');
}