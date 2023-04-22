function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numbers.forEach((v, idx) => s = s.replaceAll(v, String(idx)));
    
    return Number(s);
}