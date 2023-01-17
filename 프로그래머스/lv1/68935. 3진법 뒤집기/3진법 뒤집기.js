function solution(n) {
    return parseInt(String(n.toString(3)).split('').reverse().join(''), 3);
}