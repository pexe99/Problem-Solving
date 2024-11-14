function solution(n, wires) {
    const graph = Array.from({length: n}, () => {
        return Array.from({length: n}, () => false);
    });
    wires.forEach(([a, b]) => {
        a--; b--;
        graph[a][b] = graph[b][a] = true;
    });
    
    let result = Infinity;
    wires.forEach(([a, b]) => {
        a--; b--;
        graph[a][b] = graph[b][a] = false;
        const visited = Array.from({length: n}, () => false);
        const DFS = (cur) => {
            let counter = 1;
            visited[cur] = true;
            graph[cur].forEach((next, idx) => {
                if(next && !visited[idx]) {
                    counter += DFS(idx);
                }
            });
            return counter;
        }
        const subtree = [];
        for(let i = 0; i < n; i++) {
            if(!visited[i]) subtree.push(DFS(i));
        }
        result = Math.min(result, Math.abs(subtree[0] - subtree[1]));
        graph[a][b] = graph[b][a] = true;
    });
    return result;
}