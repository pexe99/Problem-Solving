function solution(n, m, section) {
    let painted = 0, result = 0;
    section.forEach((i) => {
        if(painted < i) {
            painted = i + m - 1;
            result++;
        }
    });
    return result;
}