function solution(info, n, m) {
    const visited = new Set();
    
    const DFS = (info, index, n, m) => {
        if(index === info.length) return n;
        if(visited.has(`${index}:${n}:${m}`)) return -1;
        visited.add(`${index}:${n}:${m}`);
        
        let result = -1;
        if(info[index][0] < n) 
            result = Math.max(result, DFS(info, index + 1, n - info[index][0], m));
        if(info[index][1] < m)
            result = Math.max(result, DFS(info, index + 1, n, m - info[index][1]));
        return result;
    }
    
    const result = DFS(info, 0, n, m);
    return result === -1 ? result : n - result;
}