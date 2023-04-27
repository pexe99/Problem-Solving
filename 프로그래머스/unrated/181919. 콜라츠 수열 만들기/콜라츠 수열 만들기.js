function solution(n) {
    let result = [n];
    while(result.at(-1) !== 1) {
        result.push(result.at(-1) % 2 ? result.at(-1) * 3 + 1 : result.at(-1) / 2);
    }
    return result;
}