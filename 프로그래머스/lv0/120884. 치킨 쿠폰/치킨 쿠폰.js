function solution(chicken) {
    let result = 0;
    while(chicken >= 10) {
        let current = Math.floor(chicken / 10);
        result += current;
        chicken %= 10;
        chicken += current;
    }
    return result;
}