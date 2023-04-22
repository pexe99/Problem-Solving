function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numbers.forEach((v, idx) => {
        s = s.split(v).join(idx);
    });
    
    return Number(s);
}