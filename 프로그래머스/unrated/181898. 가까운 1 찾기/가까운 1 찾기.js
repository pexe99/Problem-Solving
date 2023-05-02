function solution(arr, idx) {
    const result = arr.slice(idx).indexOf(1)
    return result !== -1 ? result + idx : -1;
}