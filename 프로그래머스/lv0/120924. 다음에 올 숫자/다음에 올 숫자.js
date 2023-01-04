function solution(common) {
    let answer = 0;
    
    const isArithmetic = common[1] - common[0] === common[2] - common[1];
    
    if(isArithmetic) answer = common[common.length - 1] + common[1] - common[0];
    else answer = common[common.length - 1] * (common[1] / common[0]);
    
    return answer;
}