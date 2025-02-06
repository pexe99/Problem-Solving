function solution(survey, choices) {
    const score = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    types.join("").split("").forEach((type) => score[type] = 0);
    
    choices.forEach((choice, index) => {
        const [left, right] = survey[index].split("");
        score[choice <= 4 ? left : right] += Math.abs(4 - choice);
    });
    
    return types.map(([t1, t2]) => score[t1] < score[t2] ? t2 : t1).join("");
}