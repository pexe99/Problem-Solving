function solution(land, P, Q) {
    const lands = land.reduce((acc, row) => acc.concat(row))
                .sort((a, b) => a - b);
    let cost = lands.reduce((acc, e) => acc + e - lands[0], 0) * Q;
    let answer = cost;
    
    for(let i = 1; i < lands.length; i++) {
        if(lands[i] !== lands[i - 1]) {
            cost += (lands[i] - lands[i - 1]) * i * P
            cost -= (lands[i] - lands[i - 1]) * (lands.length - i) * Q;
            answer = Math.min(answer, cost);
        }
    }
    
    return answer;
}