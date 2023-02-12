function solution(arr, divisor) {
    let result = arr.filter(number => number % divisor === 0).sort((a, b) => a - b)
    return result.length !== 0 ? result : [-1];
}