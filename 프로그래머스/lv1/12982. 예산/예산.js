function solution(d, budget) {
    d.sort((a, b) => a - b);
    for(let i = 0; i < d.length; i++) {
        budget -= d[i];
        if(0 > budget) return i;
    }
    return d.length
}