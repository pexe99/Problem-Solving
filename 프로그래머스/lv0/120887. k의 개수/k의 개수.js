function solution(i, j, k) {
    let numbers = '';
    for(let n = i; n <= j; n++) {
        numbers += String(n);
    }
    return [...numbers].filter((n) => Number(n) === k).length;
}