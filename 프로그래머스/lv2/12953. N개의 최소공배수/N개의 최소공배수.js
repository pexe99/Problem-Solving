function solution(arr) {
    arr.sort((a, b) => b - a);
    let result = LCM(arr[0], arr[1]);
    
    for(let i = 2; i < arr.length; i++) {
        result = LCM(result, arr[i]);
    }
    
    return result;
}

function LCM(a, b) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    return a * b / gcd(a, b);
}