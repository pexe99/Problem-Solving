const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

function solution(signals) {
    const peroid = signals.map(([g, y, r]) => g + y + r);
    const signalLCM = peroid.reduce((acc, cur) => lcm(acc, cur), 1);
    
    for(let i = 0; i < signalLCM; i++) {
        const isYellow = signals.every((signal, idx) => {
            const position = i % peroid[idx];
            return signal[0] <= position && position < signal[0] + signal[1];
        });
        if(isYellow) return i + 1;
    }
    
    return -1;
}