function solution(array) {
    let counter = {};
    array.forEach((v) => counter[v] = (counter[v] || 0) + 1);
    let result = Object.keys(counter).sort((a, b) => counter[b] - counter[a]);
    return counter[result[0]] === counter[result[1]] ? -1 : +result[0];
}