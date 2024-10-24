function solution(n, roads, sources, destination) {
    const graph = {};
    roads.forEach(([a, b]) => {
        graph[a] = (graph[a] || []).concat(b);
        graph[b] = (graph[b] || []).concat(a);
    });
    const distance = Array.from({length: n + 1}, (_, index) => Infinity);
    
    const dijkstra = (start) => {
        const queue = [start];
        distance[start] = 0;
        while(queue.length) {
            let current = queue.shift();
            graph[current].forEach((next) => {
                if(distance[next] !== Infinity) {
                    distance[next] = Math.min(distance[next], distance[current] + 1);
                } else {
                    distance[next] = distance[current] + 1;
                    queue.push(next);
                }
            })
        }
    }
    
    dijkstra(destination);
    return sources.map((current) => distance[current] === Infinity ? -1 : distance[current]);
}