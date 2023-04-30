function solution(binomial) {
    const result = new Function(`return ${binomial}`);
    return result();
}