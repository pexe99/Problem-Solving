function solution(array, n) {
    return array.sort((a, b) => a - b).sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
}