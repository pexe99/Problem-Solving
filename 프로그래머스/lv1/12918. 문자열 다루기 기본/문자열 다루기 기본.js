function solution(s) {
    if(s.length === 4 || s.length === 6){
    let answer = true;
    [...s].forEach(c => answer = ('0' <= c && c <= '9' && answer) ? true : false);
    
    return answer;
    }
    else return false;
}