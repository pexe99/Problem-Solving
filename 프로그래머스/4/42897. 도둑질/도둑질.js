const dp = (money, start, end) => {
    let [first, second] = [money[start], Math.max(money[start], money[start + 1])];
    for(let i = start + 2; i <= end; i++) {
        let next = Math.max(second, first + money[i]);
        [first, second] = [second, next];
    }
    return second;
}

function solution(money) {
    return Math.max(dp(money, 0, money.length - 2), dp(money, 1, money.length - 1))
}