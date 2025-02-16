function solution(n, w, num) {
    let result = 0;
    while(num <= n) {
        num += (Math.ceil(num / w) * w - num) * 2 + 1;
        result++;
    }
    return result;
}