const CODE_LENGTH = 5;

const getCombination = (array) => {
    const result = [];
    const combination = (current, array) => {
        if(current.length === 5) result.push(current);
        else {
            array.forEach((e, i) => {
                combination([...current, e], array.slice(i + 1));
            });
        }
    }
    combination([], array);
    return result;
}

const isAvailable = (test, input, output) => {
    test = new Set(test);
    let result = 0;
    input.forEach((number) => {
        if(test.has(number)) result++;
    });
    return result === output;
}

function solution(n, q, ans) {
    let numbers = new Set();
    for(let i = 1; i <= n; i++) numbers.add(i);
    for(let i = 0; i <= ans.length; i++) {
        if(ans[i] === 5) return 1;
        if(ans[i] === 0) q[i].forEach((num) => numbers.delete(num));
    }
    numbers = [...numbers];
    return getCombination(numbers).filter((current) => {
        for(let i = 0; i < q.length; i++) {
            if(!isAvailable(current, q[i], ans[i])) return false;
        }
        return true;
    }).length;
}