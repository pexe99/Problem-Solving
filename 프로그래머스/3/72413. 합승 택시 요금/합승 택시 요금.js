function solution(n, s, a, b, fares) {
    const dist = Array.from({length: n + 1}, (_, i) => {
        return Array.from({length: n + 1}, (_, j) => {
            return i === j ? 0 : Infinity;
        });
    });
    
    fares.forEach(([from, to, fare]) => {
        dist[from][to] = dist[to][from] = fare;
    });
    
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
            }
        }
    }
    
    let result = Infinity;
    for(let i = 1; i <= n; i++) {
        result = Math.min(result, dist[s][i] + dist[i][a] + dist[i][b]);
    }
    
    return result;
}