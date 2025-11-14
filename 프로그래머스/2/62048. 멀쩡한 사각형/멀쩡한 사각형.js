const getGCD = (a, b) => {
    if(b === 0) return a;
    return getGCD(b, a % b);
}

function solution(w, h) {
    const gcd = getGCD(w, h);
    const diagonal = (w / gcd + h / gcd - 1) * gcd;
    return BigInt(w * h) - BigInt(diagonal);
}