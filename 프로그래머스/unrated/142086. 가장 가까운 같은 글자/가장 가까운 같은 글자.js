function solution(s) {
    let temp = {};
    let answer = [];
    let input = [...s];
    
    for(let i = 0; i < s.length; i++) {
        let cur = input[i];
        if(temp[cur] === undefined) {
            temp[cur] = i;
            answer.push(-1);
        }
        else {
            answer.push(i - temp[cur]);
            temp[cur] = i;
        }
    }
    
    return answer;
}