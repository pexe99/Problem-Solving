const AREA = [[0, 0], [0, 1], [1, 0], [1, 1]];

function solution(arr) {
    const quadTree = (x, y, n) => {
        if(n < 2) return arr[x][y] ? [0, 1] : [1, 0];
        let [zero, one] = [0, 0];
        n >>= 1;
        AREA.forEach(([i, j]) => {
           let [curZero, curOne] = quadTree(x + i * n, y + j * n, n);
            zero += curZero; one += curOne;
        });
        if(zero === 0) return [0, 1];
        if(one === 0) return [1, 0];
        return [zero, one];
    }
    
    return quadTree(0, 0, arr.length);
}