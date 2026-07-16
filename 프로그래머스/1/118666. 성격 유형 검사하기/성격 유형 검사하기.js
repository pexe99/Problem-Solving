function solution(survey, choices) {
    const score = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0};
    survey.forEach((type, index) => {
        const current = choices[index]
        if(current < 4) score[type[0]] += 4 - current;
        else if(4 < current) score[type[1]] += current - 4;
    });
    return (score['R'] >= score['T'] ? 'R' : 'T') +
           (score['C'] >= score['F'] ? 'C' : 'F') +
           (score['J'] >= score['M'] ? 'J' : 'M') +
           (score['A'] >= score['N'] ? 'A' : 'N');
}