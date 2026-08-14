const calculate = (setA, setB) => {
    const result = new Set();
    for(const a of setA) {
        for(const b of setB) {
            result.add(a + b);
            result.add(a - b);
            result.add(b - a);
            result.add(a * b);
            if(b < a) result.add(Math.floor(a / b));
            else result.add(Math.floor(b / a));
        }
    }
    return result;
}

const solution = (N, number) => {
    const step = Array.from({length: 9}, (_, i) => new Set([+(`${N}`.repeat(i))]));
    
    for(let i = 1; i < 9; i++) {
        for(let a = 1; a <= i / 2; a++)
            calculate(step[a], step[i - a]).forEach((e) => step[i].add(e));
        if(step[i].has(number)) return i;
    }
    
    return -1;
}