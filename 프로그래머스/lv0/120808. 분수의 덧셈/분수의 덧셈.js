function solution(numer1, denom1, numer2, denom2) {
    let answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    let gcd = getGCD(answer[0], answer[1]);
    return [answer[0] / gcd, answer[1] / gcd];
}