function solution(k, ranges) {
    let result = [], collatz = [k];
    while(k !== 1) {
        k = k % 2 === 1 ? k * 3 + 1 : k / 2;
        collatz.push(k);
    }
    
    ranges.forEach(([x, y]) => {
        if(y + collatz.length - 1 < x) result.push(-1);
        else {
            let current = 0;
            for(let i = x; i < y + collatz.length - 1; i++) {
            current += getArea(collatz[i], collatz[i + 1]);
        }
        result.push(current);   
        }
    });
    return result;
}

const getArea = (start, end) => {
    return (start + end) / 2;
}