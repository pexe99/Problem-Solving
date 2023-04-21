function solution(strArr) {
    return strArr.map((v, idx) => idx % 2 ? v.toUpperCase() : v.toLowerCase());
}