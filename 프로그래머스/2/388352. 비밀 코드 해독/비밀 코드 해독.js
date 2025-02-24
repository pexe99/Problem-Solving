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
    const length = test.length + input.length;
    const set = new Set(test.concat(input));
    return output === length - set.size;
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
        return q.every((test, index) => isAvailable(current, test, ans[index]));
    }).length;
}