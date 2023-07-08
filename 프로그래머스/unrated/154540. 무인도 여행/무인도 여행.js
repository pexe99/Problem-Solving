function solution(maps) {
    const result = [];
    const visited = Array.from({length : maps.length}, (_) => new Array(maps[0].length).fill(false));
    
    maps = maps.map((v) => v.split(''));
    maps.forEach((array, i) => array.forEach((v, j) => {
        if(v === 'X') visited[i][j] = true;
    }))
    
    function DFS(sum, i, j) {
        if(i < 0 || j < 0 || i >= maps.length || j >= maps[0].length || visited[i][j]) return 0;
        else {
            sum += +maps[i][j];
            visited[i][j] = true;
            sum += DFS(0, i - 1, j);
            sum += DFS(0, i + 1, j);
            sum += DFS(0, i, j - 1);
            sum += DFS(0, i, j + 1);
            return sum;
        }
    }
    
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            let current = DFS(0, i, j);
            if(current !== 0) result.push(current);
        }
    }
    
    result.sort((a, b) => a - b);
    
    return result.length ? result : [-1];
}