function solution(n) {
    let answer = '';
    for(let i = 0; i < parseInt(n/2); i++) answer += '수박';
    return n % 2 === 1 ? answer += '수' : answer;
}