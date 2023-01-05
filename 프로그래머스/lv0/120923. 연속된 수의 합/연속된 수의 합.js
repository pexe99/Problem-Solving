function solution(num, total) {
    let answer = [];
    
    let start = (total - (num * (num - 1) / 2)) / num;
    for(i = 0; i < num; i++) answer.push(start + i);
    
    return answer;
}