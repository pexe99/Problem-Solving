function solution(arr) {
    return arr.reduce((list, current) => [...list, ...new Array(current).fill(current)], []);
}