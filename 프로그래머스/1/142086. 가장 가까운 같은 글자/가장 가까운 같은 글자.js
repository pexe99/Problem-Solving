function solution(s) {
    const charIndex = {};
    return [...s].map((c, i) => {
        const result = i - charIndex[c] || -1;
        charIndex[c] = i;
        return result;
    });
}