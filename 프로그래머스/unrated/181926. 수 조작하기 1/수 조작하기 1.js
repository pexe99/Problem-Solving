function solution(n, control) {
    const buttons = { w: 1, s: -1, d: 10, a: -10 };
    return [...control].reduce((result, cur) => result + buttons[cur], n);
}