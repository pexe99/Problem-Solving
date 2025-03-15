function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);
    let current = -1, result = 0;
    targets.forEach(([start, end]) => {
        if(start >= current) {
            result++;
            current = end;
        }
    });
    return result;
}