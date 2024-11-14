function solution(expressions) {
    let maximum = 0;
    const normal = [], question = [];
    expressions.forEach((exp) => {
        exp = exp.split(" = ");
        const [a, operator, b, answer] = [...exp[0].split(" "), exp[1]];
        if(answer === "X") question.push([a, operator, b]);
        else normal.push([a, operator, b, answer]);
        
        let numbers = a + b + (answer !== "X" ? answer : "");
        maximum = Math.max(maximum, ...numbers.split("").map((e) => +e));
    });
    
    const baseN = {};
    for(let i = maximum + 1; i <= 9; i++) baseN[i] = true;
    normal.forEach(([a, operator, b, answer]) => {
        for(let i = maximum + 1; i <= 9; i++) {
            let result;
            if(operator === "+") result = parseInt(a, i) + parseInt(b, i);
            else result = parseInt(a, i) - parseInt(b, i);
            if(result.toString(i) !== answer) baseN[i] = false;
        }
    });

    const answer = [];
    const leftBaseN = Object.keys(baseN).filter((key) => baseN[key]);
    question.forEach(([a, operator, b]) => {
        let result = -1;
        for(let i of leftBaseN) {
            let current;
            if(operator === "+") current = parseInt(a, i) + parseInt(b, i);
            else current = parseInt(a, i) - parseInt(b, i);
            if(result === -1) result = current.toString(i);
            else if(result !== current.toString(i)) {
                result = "?"; break;
            }
        }
        answer.push([a, operator, b, "=", result].join(" "));
    });
    
    return answer;
}