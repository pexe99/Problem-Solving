const SCORE = [null, 3, 2, 1, 0, 1, 2, 3];

function solution(survey, choices) {
    const testScore = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    choices.forEach((choice, index) => {
        const [left, right] = survey[index].split("");
        if(choice < 4) testScore[left] += SCORE[choice];
        else if(4 < choice) testScore[right] += SCORE[choice];
    });
    let testResult = "";
    const testScoreKey = Object.keys(testScore);
    while(testScoreKey.length) {
        const [type1, type2] = testScoreKey.splice(0, 2);
        testResult += testScore[type1] < testScore[type2] ? type2 : type1;
    }
    return testResult;
}