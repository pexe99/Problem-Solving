function solution(numLog) {
    const key = {"1" : "w", "-1" : "s", "10" : "d", "-10" : "a"};
    let result = "";
    for(let i = 1; i < numLog.length; i++) {
        result += key[String(numLog[i] - numLog[i - 1])];
    }
    return result;
}