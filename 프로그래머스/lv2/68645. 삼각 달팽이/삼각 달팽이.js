function solution(n) {
    let triangle = Array.from({length : n}, (_, i) => new Array(i + 1).fill(0));
    
    let idx1 = 0, idx2 = 0, direction = 1, total = 0;
    triangle.forEach((v) => total += v.length);
    
    for(let i = 1; i <= total; i++) {
        triangle[idx1][idx2] = i;
        if(direction === 1) {
            if(!triangle.at(idx1 + 1) || triangle[idx1 + 1][idx2] !== 0) {
                idx2++;
                direction = 2;
            }
            else idx1++;
        }
        else if(direction === 2) {
            if(!!triangle[idx1][idx2 + 1] || triangle[idx1][idx2 + 1] !== 0) {
                idx1--;
                idx2--;
                direction = 3;
            }
            else idx2++;
        }
        else {
            if(triangle[idx1 - 1][idx2 - 1] !== 0) {
                idx1++;
                direction = 1;
            }
            else {
                idx1--;
                idx2--;
            }
        }
    }
    
    return triangle.reduce((result, v) => result.concat(v), []);
}