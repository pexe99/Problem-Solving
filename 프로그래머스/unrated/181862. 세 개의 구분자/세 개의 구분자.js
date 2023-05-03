function solution(myStr) {
    const result = myStr.replace(/a|b|c/g, '*').split('*').filter((v) => v !== '');
    return result.length ? result : ['EMPTY'];
}