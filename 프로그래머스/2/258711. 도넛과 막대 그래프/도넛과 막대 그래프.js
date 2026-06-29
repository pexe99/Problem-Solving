const solution = (edges) => {
    const graph = {};
    const indegree = {};
    const outdegree = {};
    const nodes = new Set();
    
    edges.forEach(([from, to]) => {
        nodes.add(from);
        nodes.add(to);
        indegree[to] = (indegree[to] || 0) + 1;
        outdegree[from] = (outdegree[from] || 0) + 1;
        if(!graph[from]) graph[from] = [];
        graph[from].push(to);
    });
    
    let extraNode = null;
    let graphCounter = 0;
    for(const node of nodes) {
        if(!indegree[node] && outdegree[node] >= 2) {
            extraNode = node;
            graphCounter = outdegree[node];
            graph[node].forEach((next) => indegree[next]--);
            nodes.delete(node);
            break;
        }
    }
    
    let result = [extraNode, graphCounter, 0, 0]
    for(const node of [...nodes]) {
        if(!indegree[node]) {
            result[2]++;
            result[1]--;
        } else if(indegree[node] === 2 && outdegree[node] === 2) {
            result[3]++;
            result[1]--;
        }
    }
    
    return result;
}