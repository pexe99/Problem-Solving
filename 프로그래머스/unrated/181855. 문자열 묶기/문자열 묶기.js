function solution(strArr) {
    let counter = Array.from({length: 31}, () => 0);    
    strArr.forEach((v) => counter[v.length]++);   
    return Math.max(...counter);
}