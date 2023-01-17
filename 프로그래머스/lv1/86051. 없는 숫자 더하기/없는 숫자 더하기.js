function solution(numbers) {
    return 45 - numbers.reduce((sum, cur) => sum += cur);
}