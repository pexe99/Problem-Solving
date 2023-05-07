function solution(answers) {
    const answerA = [1, 2, 3, 4, 5];
    const answerB = [2, 1, 2, 3, 2, 4, 2, 5];
    const answerC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let [resultA, resultB, resultC] = [0, 0, 0];
    let result = [];
    
    answers.forEach((v, idx) => {
        if(v === answerA[idx % answerA.length]) resultA++;
        if(v === answerB[idx % answerB.length]) resultB++;
        if(v === answerC[idx % answerC.length]) resultC++;
    });
    
    if(Math.max(resultA, resultB, resultC) === resultA) result.push(1);
    if(Math.max(resultA, resultB, resultC) === resultB) result.push(2);
    if(Math.max(resultA, resultB, resultC) === resultC) result.push(3);
    console.log(result);
    
    return result.sort((a, b) => a - b);
}