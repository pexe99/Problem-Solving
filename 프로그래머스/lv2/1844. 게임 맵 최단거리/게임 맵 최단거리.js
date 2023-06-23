function solution(maps) {
    let queue = [[0, 0, 1]];
    const n = maps.length, m = maps[0].length;
    
    while(queue.length) {
        let [x, y, counter] = queue.shift();
        
        if(maps[x][y] === 0) continue;
        if(x === n - 1 && y === m - 1) return counter;
        maps[x][y] = 0;
        
        if(!!maps[x + 1] && maps[x + 1][y] === 1) queue.push([x + 1, y, counter + 1]);
        if(!!maps[x][y + 1] && maps[x][y + 1] === 1) queue.push([x, y + 1, counter + 1]);
        if(!!maps[x - 1] && maps[x - 1][y] === 1) queue.push([x - 1, y, counter + 1]);
        if(!!maps[x][y - 1] && maps[x][y - 1] === 1) queue.push([x, y - 1, counter + 1]);
    }
    
    return -1;
}