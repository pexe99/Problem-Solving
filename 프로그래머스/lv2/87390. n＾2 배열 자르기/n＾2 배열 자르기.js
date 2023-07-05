function solution(n, left, right) {
    let minimum = Math.ceil((left + 1) / n), array = [];
    
    for(let i = left + 1; i <= right + 1; i++) {
        let current = i % n === 0 ? n : i % n;
        array.push(minimum > current ? minimum : current);
        if(i % n === 0) minimum++;
    }
    
    return array;
}