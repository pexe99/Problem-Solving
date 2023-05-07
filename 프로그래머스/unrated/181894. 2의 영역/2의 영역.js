function solution(arr) {
    let result = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    return result.length ? result : [-1];
}