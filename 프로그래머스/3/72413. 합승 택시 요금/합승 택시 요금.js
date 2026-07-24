const dijkstra = (start, n, graph) => {
    const dist = new Array(n + 1).fill(Infinity);

    dist[start] = 0;
    const queue = [[start, 0]];
        
    while(queue.length) {
        const [curNode, curDist] = queue.shift();
        if(dist[curNode] < curDist) continue;
        Object.entries(graph[curNode]).forEach(([nextNode, nextDist]) => {
            const distSum  = curDist + nextDist;
            if(distSum < dist[nextNode]) {
                dist[nextNode] = distSum;
                queue.push([nextNode, distSum]);
            }
        });
        queue.sort((a, b) => a[1] - b[1]);
    }
    
    return dist;
}

const solution = (n, s, a, b, fares) => {
    const graph = Array.from({length: n + 1}, () => ({}));
    fares.forEach(([from, to, fare]) => {
        graph[from][to] = graph[to][from] = fare;
    });
    
    const fromS = dijkstra(s, n, graph);
    const fromA = dijkstra(a, n, graph);
    const fromB = dijkstra(b, n, graph);
    
    let result = Infinity;
    for(let i = 1; i <= n; i++) {
        result = Math.min(result, fromS[i] + fromA[i] + fromB[i]);
    }
    
    return result;
}