function solution(arr, intervals) {
    const [[a1, a2], [b1, b2]] = [...intervals];
    return arr.slice(a1, a2 + 1).concat(arr.slice(b1, b2 + 1));
}