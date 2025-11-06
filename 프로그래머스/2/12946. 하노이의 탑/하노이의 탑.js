function solution(n) {
    const hanoi = (from, to, through, n) => {
        if(n === 1) return [[from, to]];
        return [...hanoi(from, through, to, n - 1), 
                [from, to],
               ...hanoi(through, to, from, n - 1)];
    }
    
    return hanoi(1, 3, 2, n);
}