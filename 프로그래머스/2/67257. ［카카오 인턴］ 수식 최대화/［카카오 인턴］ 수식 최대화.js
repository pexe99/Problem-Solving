const OPERATORS = ["*", "+", "-"];

function solution(expression) {
    const operatorPermutations = getPermutation(OPERATORS);
    const numbers = expression.split(/[\+\-\*]/).map(v => +v);
    const operators = expression.split(/[0-9]/).filter(v => v);
    
    const formula = getFormula(numbers, operators);
    const result = operatorPermutations.map((permutation) => {
        let current = [...formula];
        permutation.forEach((operator) => {
            current = computeFormula(current, operator);
        });
        return Math.abs(...current);
    });
    return Math.max(...result);
}

const getPermutation = (array) => {
    const result = [];
    const permutate = (current, rest) => {
        if(current.length === array.length) {
            result.push(current);
            return;
        }
        for(let i = 0; i < rest.length; i++) {
            const next = [...current, rest[i]];
            const nextRest = [...rest.slice(0, i), ...rest.slice(i + 1)];
            permutate(next, nextRest);
        }
    }
    permutate([], array);
    return result;
}

const getFormula = (numbers, operators) => {
    const formula = [];
    while(numbers.length || operators.length) {
        formula.push(numbers.shift());
        operators.length && (formula.push(operators.shift()));
    }
    return formula;
}

const computeFormula = (formula, operator) => {
    const computation = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
    }
    const result = [formula.shift()];
    while(formula.length) {
        let [oper, number] = [formula.shift(), formula.shift()];
        if(oper === operator) {
            result[result.length - 1] = computation[oper](result.at(-1), number);
        } else result.push(oper, number);
    }
    return result;
}