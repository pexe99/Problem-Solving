function solution(numbers) {
    let answer = numbers.reduce(function add(sum, currValue) { return sum + currValue; }, 0) / numbers.length;
    return answer;
}