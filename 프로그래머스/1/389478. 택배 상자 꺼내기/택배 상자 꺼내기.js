const solution = (n, w, num) => {
    const numCol = (num - 1) % w;
    const rest = (n - num) % (2 * w);
    let result = 2 * Math.floor((n - num) / (2 * w)) + 1;
    result += rest >= 2 * (w - 1 - numCol) + 1 ? 1 : 0;
    return result;
}