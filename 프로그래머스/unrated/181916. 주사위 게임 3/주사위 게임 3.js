function solution(a, b, c, d) {
    const array = [a, b, c, d];
    const dice = {};
    array.forEach((v) => dice[v] = (dice[v] || 0) + 1);
    const numbers = Object.keys(dice).sort((a, b) => dice[b] - dice[a]);
    if(numbers.length === 1) return 1111 * numbers[0];
    else if(numbers.length === 2) {
        if(dice[numbers[0]] === 3) return Math.pow((numbers[0] * 10 + +numbers[1]), 2);
        else return (+numbers[0] + +numbers[1]) * Math.abs(+numbers[0] - +numbers[1]);
    }
    else if(numbers.length === 3) {
        return numbers[1] * numbers[2];
    }
    else return Math.min(...numbers);
}