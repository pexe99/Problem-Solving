function solution(arr, k) {
    let result = [...new Set(arr)].slice(0, k);
    while(result.length < k) result.push(-1);
    return result;
}