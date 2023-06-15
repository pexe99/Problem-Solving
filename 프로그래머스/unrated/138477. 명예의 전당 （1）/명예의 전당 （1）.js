function solution(k, score) {
    let sorted = [];
    let result = [];
    
    score.forEach((v) => {
        sorted.push(v);
        sorted.sort((a, b) => b - a);
        sorted.splice(k);
        result.push(sorted.at(-1));
    });
    
    return result;
}