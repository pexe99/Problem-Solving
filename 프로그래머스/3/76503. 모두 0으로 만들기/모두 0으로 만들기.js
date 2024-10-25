function solution(a, edges) {
    const graph = Array.from({length: a.length}, () => []);
    const visited = Array.from({length: a.length}, () => false);
    edges.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    
    let result = BigInt(0);
    let stack = [[0, -1]];
    while(stack.length) {
        let [current, parent] = stack.pop();
        if(visited[current]) {
            if(parent !== -1) {
                result += BigInt(Math.abs(a[current]));
                a[parent] += a[current];
            }
            continue;
        }
        visited[current] = true;
        stack.push([current, parent]);
        graph[current].forEach((next) => {
            if(!visited[next]) stack.push([next, current]);
        });
    }
    return a[0] === 0 ? result : -1;
}