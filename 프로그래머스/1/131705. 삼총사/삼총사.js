function solution(number) {
    let counter = 0;
    const combination = (cur, idx, n = 3) => {
        if(n === 0) {
            if(cur === 0) counter++;
            return;
        }
        if(number.length <= idx) return;
        for(let i = idx; i < number.length; i++)
            combination(cur + number[i], i + 1, n - 1);
    }
    combination(0, 0);
    return counter;
}