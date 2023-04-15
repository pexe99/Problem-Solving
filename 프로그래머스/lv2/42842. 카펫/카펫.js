function solution(brown, yellow) {  
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i === 0 && brown + yellow === (i + 2) * (yellow / i + 2)) {
            return [Math.max(i, yellow / i) + 2, Math.min(i, yellow / i) + 2];
        }
    }
}