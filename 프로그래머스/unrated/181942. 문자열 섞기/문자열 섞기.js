function solution(str1, str2) {
    return [...str1].map((v, idx) => v + str2[idx]).join('');
}