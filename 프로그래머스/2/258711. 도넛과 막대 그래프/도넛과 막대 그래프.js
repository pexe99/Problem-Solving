const solution = (edges) => {
    const graph = {};
    edges.forEach(([from, to]) => {
        if(!graph[from]) graph[from] = {indegree: 0, outdegree: 0};
        if(!graph[to]) graph[to] = {indegree: 0, outdegree: 0};
        graph[from].outdegree++;
        graph[to].indegree++;
    });
    
    let newNode = null;
    let lineGraph = 0;
    let eightGraph = 0;
    Object.entries(graph).forEach(([node, {indegree, outdegree}]) => {
        if(indegree === 0 && outdegree > 1) newNode = node;
        else if(outdegree === 0) lineGraph++;
        else if(indegree > 1 && outdegree > 1) eightGraph++;
    });
    
    let donutGraph = graph[newNode].outdegree - lineGraph - eightGraph;
    return [+newNode, donutGraph, lineGraph, eightGraph];
}