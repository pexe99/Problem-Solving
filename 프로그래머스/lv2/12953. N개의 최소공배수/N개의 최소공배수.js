function solution(arr) {
    return arr.reduce((lcm, cur) => lcm * cur / gcd(lcm, cur));
}

function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}