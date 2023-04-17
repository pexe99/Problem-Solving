function solution(e) {
    let result = [];
    const len = e.length;
    for(let i = 0; i < len; i++) {
        let current = 0;
        for(let j = 1; j <= len; j++) {
            current += e[(len + i + j) % len];
            result.push(current);
        }
    }
    return [...new Set(result)].length;
}