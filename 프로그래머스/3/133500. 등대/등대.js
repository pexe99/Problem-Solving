function solution(n, lighthouse) {
    const graph = {};
    const visited = new Array(n + 1).fill(false);
    for (let i = 1; i <= n; i++) graph[i] = [];
    lighthouse.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    let result = 0;
    const light = new Set();
    visited[0] = true;
    const stack = [[0, 1]];
    const processStack = [];

    while (stack.length) {
        const [parent, node] = stack.pop();
        if (!visited[node]) {
            visited[node] = true;
            processStack.push([parent, node]);
            graph[node].forEach((next) => {
                if (!visited[next]) stack.push([node, next]);
            });
        }
    }
    while (processStack.length) {
        const [parent, node] = processStack.pop();
        const darkChild = graph[node].filter((cur) => 
            !light.has([node, cur].sort().join("")) && cur !== parent
        ).length;
        if (darkChild) {
            graph[node].forEach((cur) => light.add([node, cur].sort().join("")));
            result++;
        }
    }
    
    return result;
}
