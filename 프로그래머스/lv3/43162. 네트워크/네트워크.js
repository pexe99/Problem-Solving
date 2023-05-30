function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let result = 0;
    
    function DFS(current) {
        visited[current] = true;  
        computers[current].forEach((v, i) => {
            if(v === 1 && !visited[i]) DFS(i);
        })
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            result++;
            DFS(i);
        }
    }
    
    return result;
}   