function solution(n) {
    let triangle = Array.from({length : n}, (_, i) => new Array(i + 1).fill(0));
    
    let idx1 = -1, idx2 = 0, number = 0;
    
    for(let i = n; i > 0; i -= 3) {
        triangle[++idx1][idx2] = ++number;
        
        for(let j = 0; j < i - 1; j++) triangle[++idx1][idx2] = ++number;
        for(let j = 0; j < i - 1; j++) triangle[idx1][++idx2] = ++number;
        for(let j = 0; j < i - 2; j++) triangle[--idx1][--idx2] = ++number;
    }
    
    return triangle.flat();
}