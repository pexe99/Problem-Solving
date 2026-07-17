function solution(sizes) {
    const [w, h] = sizes.reduce((acc, cur) => {
        cur.sort((a, b) => a - b);
        acc[0] = Math.max(acc[0], cur[0]);
        acc[1] = Math.max(acc[1], cur[1]);
        return acc;
    }, [0, 0]);
    
    return w * h;
}