function solution(s){
    let result = 0;
    [...s.toLowerCase()].forEach(cur => result += cur === 'p' ? 1 : cur === 'y' ? -1 : 0);
    
    return result === 0 ? true : false;
}