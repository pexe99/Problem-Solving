function solution(arr, divisor) {
    let result = arr.filter(number => number % divisor === 0);
    return result.length !== 0 ? result.sort((a, b) => a - b) : [-1];
}