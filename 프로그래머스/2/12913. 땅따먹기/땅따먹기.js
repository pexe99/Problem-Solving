function solution(land) {
    for(let i = 1; i < land.length; i++) {
        land[i] = land[i].map((cur, idx) => {
            const max = Math.max(...land[i - 1].filter((_, i) => i !== idx));
            return cur + max;
        });
    }
    
    return Math.max(...land.at(-1));
}