function solution(n, edge) {
    let graph = Array.from({length: n}, () => []);
    edge.forEach(([a, b]) => {
        graph[a - 1].push(b - 1);
        graph[b - 1].push(a - 1);
    });
    
    let distance = Array.from({length: n}, () => Infinity);
    let queue = [[0, 0]];
    while(queue.length) {
        let [current, n] = queue.shift();
        if(distance[current] === Infinity) {
            distance[current] = n;
            graph[current].forEach((e) => queue.push([e, n + 1]));
        }
    }
    let max = Math.max(...distance);
    return distance.filter((e) => e === max).length;
}