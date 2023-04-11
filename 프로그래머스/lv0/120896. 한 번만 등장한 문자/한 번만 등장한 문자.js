function solution(s) {
    const counter = {};
    let result = [];
    
    [...s].forEach((cur) => {
        if(cur in counter) counter[cur]++;
        else counter[cur] = 1;
    })
    
    for(cur in counter) {
        if(counter[cur] === 1) result.push(cur);
    }
    
    return result.sort().join("");
}