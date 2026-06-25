const solution = (m, n, sx, sy, balls) => {
    const result = [];
    
    for(const [bx, by] of balls) {
        let current = Infinity;
        if(sx !== bx || by < sy)
            current = Math.min(current, (sx - bx) ** 2 + (2 * n - sy - by) ** 2);
        if(sx !== bx || sy < by)
            current = Math.min(current, (sx - bx) ** 2 + (sy + by) ** 2);
        if(sy !== by || sx < bx)
            current = Math.min(current, (sy - by) ** 2 + (sx + bx) ** 2);
        if(sy !== by || bx < sx)
            current = Math.min(current, (sy - by) ** 2 + (2 * m - sx - bx) ** 2);
        result.push(current);
    };
    
    return result;
}