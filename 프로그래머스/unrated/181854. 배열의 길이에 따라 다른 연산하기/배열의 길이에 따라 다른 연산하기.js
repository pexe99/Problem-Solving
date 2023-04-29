function solution(arr, n) {
    return arr.length % 2 ? arr.map((v, idx) => !(idx % 2) ? v + n : v) : arr.map((v, idx) => idx % 2 ? v + n : v);
}