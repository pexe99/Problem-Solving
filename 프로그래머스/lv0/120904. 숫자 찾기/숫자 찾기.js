function solution(num, k) {
    let result = [...String(num)].indexOf(String(k));
    return result === -1 ? -1 : result + 1;
}