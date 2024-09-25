function solution(n, m, x, y, r, c, k) {
    let result = "";
    const distance = Math.abs(x - r) + Math.abs(y - c);
    k -= distance;
    if (k < 0 || k % 2 === 1) return "impossible";
    
    const direction = {
        d: Math.max(0, r - x),
        u: Math.max(0, x - r),
        r: Math.max(0, c - y),
        l: Math.max(0, y - c)
    };

    result += 'd'.repeat(direction.d);
    let d = Math.min(Math.floor(k / 2), n - (x + direction.d));
    result += 'd'.repeat(d);
    direction.u += d;
    k -= 2 * d;

    result += 'l'.repeat(direction.l);
    let l = Math.min(Math.floor(k / 2), y - direction.l - 1);
    result += 'l'.repeat(l);
    direction.r += l;
    k -= 2 * l;

    result += 'rl'.repeat(Math.floor(k / 2));
    result += 'r'.repeat(direction.r);
    result += 'u'.repeat(direction.u);

    return result;
}
