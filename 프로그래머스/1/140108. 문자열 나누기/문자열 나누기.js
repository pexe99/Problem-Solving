function solution(s) {
    let index = 0, result = 0;
    while(index < s.length) {
        let char = s[index];
        let counter = 1;
        while(s[++index] && counter) {
            counter += char === s[index] ? 1 : -1;
        }
        result++;
    }
    return result;
}