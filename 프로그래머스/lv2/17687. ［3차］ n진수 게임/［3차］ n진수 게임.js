function solution(n, t, m, p) {
    let numbers = Array.from({length: t * m}, (_, i) => i);
    numbers = numbers.map((v) => v.toString(n).split('')).flat();
    
    let result = [];
    while(numbers.length) {
        let current = numbers.splice(0, m);
        result.push(current[p - 1]);
        if(result.length === t) break;
    }
    return result.join('').toUpperCase();
}