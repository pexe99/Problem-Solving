function solution(numbers) {
    let minus = numbers.filter((n) => n < 0).sort((a, b) => a - b);
    numbers.sort((a, b) => b - a);
    if(minus.length < 2) return numbers[0] * numbers[1];
    else return Math.max(numbers[0] * numbers[1], minus[0] * minus[1]);
}