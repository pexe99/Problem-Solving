function solution(array) {
    return array.sort(function(a, b) { return a - b; })[Math.floor(array.length / 2)];
}