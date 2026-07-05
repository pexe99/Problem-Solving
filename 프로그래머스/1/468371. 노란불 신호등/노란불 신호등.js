const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const lcm = (a, b) => a * b / gcd(a, b);

const solution = (signals) => {
    const period = signals.map(([G, Y, R]) => G + Y + R);
    const signalsLCM = period.reduce((acc, cur) => lcm(acc, cur), 1);
    
    for(let i = 0; i < signalsLCM; i++) {
        const isYellow = signals.every(([G, Y, R], idx) => {
            const current = i % period[idx];
            return G <= current && current < G + Y;
        });
        if(isYellow) return i + 1;
    }
    
    return -1;
}