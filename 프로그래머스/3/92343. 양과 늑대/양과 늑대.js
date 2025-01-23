function solution(info, edges) {
    const graph = {};
    edges.forEach(([from, to]) => {
        graph[from] = [...(graph[from] || []), to];
    });

    let answer = 0;

    const DFS = (current, sheep, wolf, available) => {
        if (info[current] === 0) sheep += 1;
        else wolf += 1;
        
        if (wolf >= sheep) return;
        answer = Math.max(answer, sheep);
        
        const nextAvailable = new Set(available);
        nextAvailable.delete(current);
        graph[current]?.forEach((next) => nextAvailable.add(next));
        for (let next of nextAvailable) {
            DFS(next, sheep, wolf, nextAvailable);
        }
    };

    DFS(0, 0, 0, new Set([0]));
    return answer;
}
