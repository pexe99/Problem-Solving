function solution(price, money, count) {
    let totalPrice = (count + 1) * count / 2 * price;
    return totalPrice <= money ? 0 : totalPrice - money;
}