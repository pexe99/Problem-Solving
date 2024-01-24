function solution(begin, target, words) {
    let graph = {};
    words.push(begin);
    words.forEach((x) => {
        words.forEach((y) => {
            if(x !== y && isOnlyOneDiff(x, y)) {
                graph[x] = (graph[x] || []).concat(y);
            }
        })
    });
    
    let result = 0;
    let visited = words.reduce((res, cur) => {
        res[cur] = false;
        return res;
    }, {});
    
    const DFS = (cur, n) => {
        if(cur === target) {
            result = result === 0 ? n : Math.min(n, result);
        }
        visited[cur] = true;
        graph[cur]?.forEach((value) => {
            if(!visited[value]) DFS(value, n + 1);
        });
        visited[cur] = false;
    }
    
    DFS(begin, 0);
    return result;
}

const isOnlyOneDiff = (x, y) => {
    let result = [...x].reduce((res, cur, idx) => res + (cur === y[idx] ? 0 : 1), 0);
    return result === 1;
}