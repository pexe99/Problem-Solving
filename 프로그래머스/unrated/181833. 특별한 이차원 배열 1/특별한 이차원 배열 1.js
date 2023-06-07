function solution(n) {
    let result = [];
    for(let i = 0; i < n; i++) {
        let array = new Array(n).fill(0);
        array[i] = 1;
        result.push(array);
    }
    return result;
}