function solution(number, limit, power) {
    let weapons = Array.from({length: number}, (_, i) => i + 1);

    let result = weapons.map((v) => {
        if(v === 1) return v;
        
        let current = [];
        for(let i = 1; i <= Math.sqrt(v); i++) {
            if(v % i === 0) {
            current.push(i);
            if(i !== v/i) current.push(v/i);
            }
        }
        if(limit < current.length) return power;
        return current.length;
    });
    
    return result.reduce((s, v) => s + v);
}