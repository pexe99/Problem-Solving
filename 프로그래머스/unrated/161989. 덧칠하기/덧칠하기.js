function solution(n, m, section) {
    let result = 0;
    let wall = new Array(n).fill(true);
    section.forEach((i) => wall[i - 1] = false);
    
    for(let i = 0; i < n; i++) {
        if(!wall[i]) {
            result++;
            for(let j = 0; j < m; j++) {
                if(j + i === n) break;
                wall[j+ i] = true;
            }
        }
    }
    return result;
}