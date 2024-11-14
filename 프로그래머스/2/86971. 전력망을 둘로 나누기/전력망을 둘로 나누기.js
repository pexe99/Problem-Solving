function solution(n, wires) {
    const graph = {};
    wires.forEach(([a, b]) => {
        graph[a - 1] = [...(graph[a - 1] || []), b - 1];
        graph[b - 1] = [...(graph[b - 1] || []), a - 1];
    });
    
    const parent = new Array(n).fill(null);
    const bfsOrder = [0];
    parent[0] = -1;
    for(let i = 0; i < bfsOrder.length; i++) {
        const current = bfsOrder[i];
        graph[current].forEach((next) => {
            if(parent[next] === null) {
                parent[next] = current;
                bfsOrder.push(next);
            }
        });
    }
    
    let result = Infinity;
    const DP = new Array(n).fill(1);
    for(let i = bfsOrder.length - 1; i > 0; i--) {
        const current = bfsOrder[i];
        DP[parent[current]] += DP[current];
        result = Math.min(result, Math.abs(n - 2 * DP[current]));
    }
    return result;
}