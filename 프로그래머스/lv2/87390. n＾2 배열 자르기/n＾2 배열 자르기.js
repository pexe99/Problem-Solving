function solution(n, left, right) {
    let array = [];
    
    for(let i = left; i <= right; i++) {
        array.push(Math.max(i % n, Math.floor(i / n)) + 1);
    }
    
    return array;
}