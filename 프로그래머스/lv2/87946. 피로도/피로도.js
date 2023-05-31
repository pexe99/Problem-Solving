function solution(k, dungeons) {
    let result = -1;
    let visited = new Array(dungeons.length).fill(false);
    
    function DFS(energy, counter) {
        dungeons.forEach((v, i) => {
            if(!visited[i] && energy >= v[0]) {
                visited[i] = true;
                DFS(energy - v[1], counter + 1);
                visited[i] = false;
            }
        });
        
        result = Math.max(result, counter);
    }
    
    DFS(k, 0); 
    
    return result;
}