function solution(price, money, count) {
    const fee = (1 + count) * count * price / 2 - money;
    return fee > 0 ? fee : 0
}